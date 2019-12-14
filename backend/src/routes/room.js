import express from "express";
import { parseError } from "../util/helpers";
import Room from "../models/room";
import User from "../models/user";
import RoomTimetable from "../models/roomTimetable";
import RoomTimetableDay from "../models/roomTimetableDay";
import RoomTimetableHour from "../models/roomTimetableHour";

const ROOM_CODE = {
  Gym: "G",
  Billiards: "B",
  Tv: "T",
  Fitness: "F",
  PingPong: "P"
};

const roomRoutes = express.Router();
roomRoutes.post("/add/room", async (req, res) => {
  const { name, describtion, symbol, startHour, endHour, hourDiff } = req.body;
  try {
    // Create timetable days
    let days = [];
    for (let i = 0; i < 7; i++) {
      // Create timetable day hours
      let hours = [];
      for (let i = startHour; i <= endHour; i += hourDiff) {
        const hour = new RoomTimetableHour({
          value: String(i) + ":00"
        });
        hours.push(hour);
        await hour.save();
      }

      const day = new RoomTimetableDay({
        hours: hours
      });
      days.push(day);
      await day.save();
    }

    // Create timetable
    const timetable = new RoomTimetable({
      days: days
    });
    await timetable.save();

    const room = new Room({
      name: name,
      describtion: describtion,
      symbol: symbol,
      timetable: timetable._id
    });
    await room.save();

    res.status(200).send(room);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/get/room-timetable", async (req, res) => {
  const { roomSymbol } = req.body;
  try {
    const room = await Room.findOne({ symbol: roomSymbol })
      .populate({
        path: "timetable",
        populate: {
          path: "days",
          populate: {
            path: "hours",
            populate: {
              path: "reservingUser"
            }
          }
        }
      })
      .exec();

    res.status(200).send(room.timetable);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/get/hours-template", async (req, res) => {
  const { roomSymbol } = req.body;
  try {
    const room = await Room.findOne({ symbol: roomSymbol })
      .populate({
        path: "timetable",
        populate: {
          path: "days",
          populate: {
            path: "hours",
            populate: {
              path: "reservingUser"
            }
          }
        }
      })
      .exec();

    const hours = room.timetable.days[0].hours;
    let valueOfHours = [];
    hours.forEach(hour => {
      valueOfHours.push(hour.value);
    });

    res.status(200).send(valueOfHours);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/get/get-id-for-today-hour", async (req, res) => {
  const { roomSymbol, hourString } = req.body;
  try {
    const room = await Room.findOne({ symbol: roomSymbol })
      .populate({
        path: "timetable",
        populate: {
          path: "days",
          populate: {
            path: "hours",
            populate: {
              path: "reservingUser"
            }
          }
        }
      })
      .exec();

    const hours = room.timetable.days[0].hours;
    let hourId = "";
    hours.forEach(hour => {
      if (hour.value === hourString) {
        hourId = hour._id;
      }
    });

    res.status(200).send(hourId);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/get/hour-details", async (req, res) => {
  const { hourId } = req.body;
  try {
    const hour = await RoomTimetableHour.findOne({ _id: hourId })
      .populate("reservingUser")
      .exec();

    res.status(200).send(hour);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/reserve-hour", async (req, res) => {
  const { hourId, userId } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    await RoomTimetableHour.update(
      { _id: hourId },
      {
        $set: {
          reservingUser: user,
          isReserved: true
        }
      }
    );

    res.status(200).send("ok");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/cancel-reservation", async (req, res) => {
  const { hourId } = req.body;
  try {
    await RoomTimetableHour.update(
      { _id: hourId },
      {
        $set: {
          reservingUser: null,
          isReserved: false
        }
      }
    );

    res.status(200).send("ok");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default roomRoutes;

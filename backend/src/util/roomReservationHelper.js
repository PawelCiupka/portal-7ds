import { ROOM_HOUR_TEMPLATE } from "./helpers";
import Room from "../models/room";
import User from "../models/user";
import RoomTimetableHour from "../models/roomTimetableHour";

const getHourId = async (roomSymbol, hourValue) =>
  await fetch("/api/room/get/get-id-for-today-hour", {
    method: "POST",
    body: JSON.stringify({
      roomSymbol: roomSymbol,
      hourString: hourValue
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

const manageHour = async (roomSymbol, hourString) => {
  try {
    const room = await Room.findOne({ symbol: roomSymbol })
      .populate({
        path: "timetable",
        populate: {
          path: "days",
          populate: {
            path: "hours"
          }
        }
      })
      .exec();

    const hours = room.timetable.days[0].hours;
    hours.forEach(async hour => {
      if (hour.value === hourString) {
        console.log("ok - hourId = " + hour._id);

        const user = await User.findOne({ _id: "5dee29d65551370b446368ef" });
        RoomTimetableHour.updateOne(
          { _id: hour._id },
          {
            $set: {
              isReserved: true,
              reservingUser: user
            }
          }
        ).exec();
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const intervalReservationFunction = () => {
  console.log("intervalReservationFunction");
  const delay = 60 * 1000;

  let reserveHour = setInterval(() => {
    const d = new Date();
    const nowHour = d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);

    ROOM_HOUR_TEMPLATE.Tv.forEach(hour => {
      console.log(hour + " is not equal to " + nowHour);
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour("T", hour);
      }
    });
  }, delay);
};

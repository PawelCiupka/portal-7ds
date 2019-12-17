import { ROOM_HOUR_TEMPLATE, ROOM_CODE } from "./helpers";
import Room from "../models/room";
import User from "../models/user";
import RoomTimetableHour from "../models/roomTimetableHour";

const getTodayHours = async roomSymbol => {
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

    const days = room.timetable.days.sort((a, b) => {
      if (a.dayOfWeek < b.dayOfWeek) {
        return -1;
      } else {
        return 1;
      }
    });
    const hours = days[0].hours;
    return hours;
  } catch (err) {
    console.log(err);
  }
};

const manageHour = async (roomSymbol, hourString) => {
  try {
    const hours = await getTodayHours(roomSymbol);

    console.log(hours);
    hours.forEach(async hour => {
      if (hour.value === hourString) {
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
        console.log("Auto reservation made at " + hourString);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const resetDayHours = async roomSymbol => {
  try {
    const hours = await getTodayHours(roomSymbol);

    hours.forEach(async hour => {
      RoomTimetableHour.updateOne(
        { _id: hour._id },
        {
          $set: {
            isReserved: false,
            reservingUser: null
          }
        }
      ).exec();
    });
  } catch (err) {
    console.log(err);
  }
};

const resetReservations = () => {
  // resetDayHours(ROOM_CODE.Gym);
  // resetDayHours(ROOM_CODE.Billiards);
  resetDayHours(ROOM_CODE.Tv);
  // resetDayHours(ROOM_CODE.Fitness);
  // resetDayHours(ROOM_CODE.PingPong);
  console.log("Reset all reservation for today");
};

export const intervalReservationFunction = () => {
  console.log("Start automatic room reservation service");
  const delay = 60 * 1000;

  let reserveHour = setInterval(() => {
    const d = new Date();
    const nowHour = d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);

    ROOM_HOUR_TEMPLATE.Tv.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Tv, hour);
      } else {
        console.log(hour + " is not equal to " + nowHour);
      }
    });

    if (nowHour === "23:59") {
      console.log(nowHour + " is equal to 23:59");
      resetReservations();
    }
  }, delay);
};

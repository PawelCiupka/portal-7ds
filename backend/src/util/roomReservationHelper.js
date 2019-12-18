import { ROOM_CODE } from "./helpers";
import Room from "../models/room";
import User from "../models/user";
import RoomTimetableHour from "../models/roomTimetableHour";
import RoomTimetableDay from "../models/roomTimetableDay";

const getHoursForDay = async (roomSymbol, dayNum) => {
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
    const hours = days[dayNum].hours;
    return hours;
  } catch (err) {
    console.log(err);
  }
};

const getRoomHoursTemplate = async roomSymbol => {
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

    return valueOfHours;
  } catch (err) {
    console.log(err);
  }
};

const manageHour = async (roomSymbol, hourString) => {
  try {
    const hours = await getHoursForDay(roomSymbol, 0);

    console.log(hours);
    hours.forEach(async hour => {
      if (hour.value === hourString) {
        console.log(hour);
        if (hour.reservingUser === null) {
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
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const resetDayHours = async roomSymbol => {
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

    let todayHours = await getHoursForDay(roomSymbol, 0);
    todayHours.forEach(async hour => {
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

    todayHours = await getHoursForDay(roomSymbol, 0);
    days.forEach((day, index) => {
      if (index > 0) {
        let i = index - 1;
        RoomTimetableDay.updateOne(
          { _id: days[i]._id },
          {
            $set: {
              hours: day.hours
            }
          }
        ).exec();
      }
    });
    RoomTimetableDay.updateOne(
      { _id: days[6]._id },
      {
        $set: {
          hours: todayHours
        }
      }
    ).exec();
  } catch (err) {
    console.log(err);
  }
};

const resetReservations = () => {
  resetDayHours(ROOM_CODE.Gym);
  resetDayHours(ROOM_CODE.Billiards);
  resetDayHours(ROOM_CODE.Tv);
  resetDayHours(ROOM_CODE.Fitness);
  resetDayHours(ROOM_CODE.PingPong);
  console.log("Reset all reservation for today");
};

export const intervalReservationFunction = () => {
  const delay = 60 * 1000;
  console.log(
    "Start automatic room reservation service with delay " +
      String(delay / 1000) +
      "s."
  );

  let hoursTemplateGym = [];
  getRoomHoursTemplate(ROOM_CODE.Gym).then(res => (hoursTemplateGym = res));

  let hoursTemplateBilliards = [];
  getRoomHoursTemplate(ROOM_CODE.Billiards).then(
    res => (hoursTemplateBilliards = res)
  );

  let hoursTemplateTv = [];
  getRoomHoursTemplate(ROOM_CODE.Tv).then(res => (hoursTemplateTv = res));

  let hoursTemplateFitness = [];
  getRoomHoursTemplate(ROOM_CODE.Fitness).then(
    res => (hoursTemplateFitness = res)
  );

  let hoursTemplatePingPong = [];
  getRoomHoursTemplate(ROOM_CODE.PingPong).then(
    res => (hoursTemplatePingPong = res)
  );

  let reserveHour = setInterval(() => {
    const d = new Date();
    const nowHour = d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
    console.log("Checking " + nowHour + " o'clock");

    hoursTemplateGym.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Gym, hour);
      }
    });

    hoursTemplateBilliards.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Gym, hour);
      }
    });

    hoursTemplateTv.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Gym, hour);
      }
    });

    hoursTemplateFitness.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Gym, hour);
      }
    });

    hoursTemplatePingPong.forEach(hour => {
      if (hour === nowHour) {
        console.log(hour + " is equal to " + nowHour);
        manageHour(ROOM_CODE.Gym, hour);
      }
    });

    if (nowHour === "23:59") {
      resetReservations();
    }
  }, delay);
};

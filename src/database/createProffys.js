module.exports = async function(db, { proffyValue, classValue, classScheduleValue }) {
  const insertedProffy = await db.run(`
      INSERT INTO proffys (
        name,
        avatar,
        phone,
        bio
      ) VALUES (
        "${proffyValue.name}",
        "${proffyValue.avatar}",
        "${proffyValue.phone}",
        "${proffyValue.bio}"
      );
  `)

  const proffy_id = insertedProffy.lastID

  const insertedClass = await db.run(`
      INSERT INTO classes (
        subject,
        cost,
        prof_id
      ) VALUES (
        "${classValue.subject}",
        "${classValue.cost}",
        "${proffy_id}"
      );
  `)

  const class_id = insertedClass.lastID

  const insertedAllclassScheduleValues = classScheduleValue.map((value) => {
    return db.run(`
        INSERT INTO class_schedule (
          class_id,
          weekday,
          time_from,
          time_to
        ) VALUES (
          "${class_id}",
          "${value.weekday}",
          "${value.time_from}",
          "${value.time_to}"
        );
    `)
  })

  await Promise.all(insertedAllclassScheduleValues)
}
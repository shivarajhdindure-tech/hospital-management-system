const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* -----------------------------------
   HOME ROUTE
----------------------------------- */

app.get("/", (req, res) => {
  res.send("Hospital Management Backend Running");
});

/* -----------------------------------
   ADD PATIENT API
----------------------------------- */

app.post("/add-patient", (req, res) => {
  const { patient_name, age, gender, phone, address } = req.body;

  const sql = `
        INSERT INTO Patients
        (patient_name, age, gender, phone, address)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(sql, [patient_name, age, gender, phone, address], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting patient");
    } else {
      res.send("Patient added successfully");
    }
  });
});

/* -----------------------------------
   GET ALL PATIENTS API
----------------------------------- */

app.get("/patients", (req, res) => {
  const sql = "SELECT * FROM Patients";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching patients");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE PATIENT API
----------------------------------- */

app.delete("/delete-patient/:id", (req, res) => {
  const patientId = req.params.id;

  const sql = "DELETE FROM Patients WHERE patient_id = ?";

  db.query(sql, [patientId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting patient");
    } else {
      res.send("Patient deleted successfully");
    }
  });
});

/* -----------------------------------
   UPDATE PATIENT API
----------------------------------- */

app.put("/update-patient/:id", (req, res) => {
  const patientId = req.params.id;

  const { patient_name, age, gender, phone, address } = req.body;

  const sql = `
        UPDATE Patients
        SET
            patient_name = ?,
            age = ?,
            gender = ?,
            phone = ?,
            address = ?
        WHERE patient_id = ?
    `;

  db.query(
    sql,
    [patient_name, age, gender, phone, address, patientId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating patient");
      } else {
        res.send("Patient updated successfully");
      }
    },
  );
});

/* -----------------------------------
   ADD DOCTOR API
----------------------------------- */

app.post("/add-doctor", (req, res) => {
  const { doctor_name, specialization, phone, email, department_id } = req.body;

  const sql = `
        INSERT INTO Doctors
        (doctor_name, specialization, phone, email, department_id)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [doctor_name, specialization, phone, email, department_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding doctor");
      } else {
        res.send("Doctor added successfully");
      }
    },
  );
});

/* -----------------------------------
   GET ALL DOCTORS
----------------------------------- */

app.get("/doctors", (req, res) => {
  const sql = "SELECT * FROM Doctors";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching doctors");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE DOCTOR
----------------------------------- */

app.delete("/delete-doctor/:id", (req, res) => {
  const doctorId = req.params.id;

  const sql = "DELETE FROM Doctors WHERE doctor_id = ?";

  db.query(sql, [doctorId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting doctor");
    } else {
      res.send("Doctor deleted successfully");
    }
  });
});

/* -----------------------------------
   UPDATE DOCTOR
----------------------------------- */

app.put("/update-doctor/:id", (req, res) => {
  const doctorId = req.params.id;

  const { doctor_name, specialization, phone, email, department_id } = req.body;

  const sql = `
        UPDATE Doctors
        SET
            doctor_name = ?,
            specialization = ?,
            phone = ?,
            email = ?,
            department_id = ?
        WHERE doctor_id = ?
    `;

  db.query(
    sql,
    [doctor_name, specialization, phone, email, department_id, doctorId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating doctor");
      } else {
        res.send("Doctor updated successfully");
      }
    },
  );
});

/* -----------------------------------
   ADD APPOINTMENT
----------------------------------- */

app.post("/add-appointment", (req, res) => {
  const { patient_id, doctor_id, appointment_date, appointment_time, status } =
    req.body;

  const sql = `
        INSERT INTO Appointments
        (
            patient_id,
            doctor_id,
            appointment_date,
            appointment_time,
            status
        )
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [patient_id, doctor_id, appointment_date, appointment_time, status],
    (err, result) => {
      if (err) {
        console.log(err);

        res.status(500).send("Error adding appointment");
      } else {
        res.send("Appointment added successfully");
      }
    },
  );
});

/* -----------------------------------
   GET APPOINTMENTS
----------------------------------- */

app.get("/appointments", (req, res) => {
  const sql = `
        SELECT
            a.*,
            p.patient_name,
            d.doctor_name
        FROM Appointments a

        JOIN Patients p
        ON a.patient_id = p.patient_id

        JOIN Doctors d
        ON a.doctor_id = d.doctor_id
    `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error fetching appointments");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE APPOINTMENT
----------------------------------- */

app.delete("/delete-appointment/:id", (req, res) => {
  const appointmentId = req.params.id;

  const sql = "DELETE FROM Appointments WHERE appointment_id = ?";

  db.query(sql, [appointmentId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error deleting appointment");
    } else {
      res.send("Appointment deleted successfully");
    }
  });
});
/* -----------------------------------
   ADD BILL
----------------------------------- */

app.post("/add-bill", (req, res) => {
  const { patient_id, appointment_id, amount, payment_status } = req.body;

  const sql = `
        INSERT INTO Billing
        (
            appointment_id,
            amount,
            payment_status
        )
        VALUES (?, ?, ?)
    `;

  db.query(sql, [appointment_id, amount, payment_status], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error adding bill");
    } else {
      res.send("Bill added successfully");
    }
  });
});

/* -----------------------------------
   GET BILLS
----------------------------------- */

app.get("/bills", (req, res) => {
  const sql = `
    SELECT
        b.bill_id,
        b.appointment_id,
        b.amount,
        b.payment_status,
        a.patient_id,
        p.patient_name
    FROM Billing b

    JOIN Appointments a
    ON b.appointment_id = a.appointment_id

    JOIN Patients p
    ON a.patient_id = p.patient_id
`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error fetching bills");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE BILL
----------------------------------- */

app.delete("/delete-bill/:id", (req, res) => {
  const billId = req.params.id;

  const sql = "DELETE FROM Billing WHERE bill_id = ?";

  db.query(sql, [billId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error deleting bill");
    } else {
      res.send("Bill deleted successfully");
    }
  });
});

/* -----------------------------------
   LOGIN API
----------------------------------- */

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = `
        SELECT *
        FROM Users
        WHERE email = ?
        AND password = ?
    `;

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Server Error");
    } else {
      if (result.length > 0) {
        res.json({
          success: true,
          user: result[0],
        });
      } else {
        res.json({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }
  });
});

/* -----------------------------------
   DASHBOARD STATS
----------------------------------- */

app.get("/dashboard-stats", (req, res) => {
  const patientSql = "SELECT COUNT(*) AS totalPatients FROM Patients";

  const doctorSql = "SELECT COUNT(*) AS totalDoctors FROM Doctors";

  const appointmentSql =
    "SELECT COUNT(*) AS totalAppointments FROM Appointments";

  const revenueSql = "SELECT SUM(amount) AS totalRevenue FROM Billing";

  db.query(patientSql, (err1, patientResult) => {
    if (err1) {
      console.log(err1);

      return res.status(500).send("Error");
    }

    db.query(doctorSql, (err2, doctorResult) => {
      if (err2) {
        console.log(err2);

        return res.status(500).send("Error");
      }

      db.query(appointmentSql, (err3, appointmentResult) => {
        if (err3) {
          console.log(err3);

          return res.status(500).send("Error");
        }

        db.query(revenueSql, (err4, revenueResult) => {
          if (err4) {
            console.log(err4);

            return res.status(500).send("Error");
          }

          res.json({
            totalPatients: patientResult[0].totalPatients,

            totalDoctors: doctorResult[0].totalDoctors,

            totalAppointments: appointmentResult[0].totalAppointments,

            totalRevenue: revenueResult[0].totalRevenue || 0,
          });
        });
      });
    });
  });
});

/* -----------------------------------
   UPDATE PROFILE
----------------------------------- */

app.put("/update-profile/:id", (req, res) => {
  const userId = req.params.id;

  const { full_name, email, password } = req.body;

  const sql = `
        UPDATE Users
        SET
            full_name = ?,
            email = ?,
            password = ?
        WHERE user_id = ?
    `;

  db.query(sql, [full_name, email, password, userId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error updating profile");
    } else {
      res.send("Profile updated successfully");
    }
  });
});
/* -----------------------------------
   START SERVER
----------------------------------- */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

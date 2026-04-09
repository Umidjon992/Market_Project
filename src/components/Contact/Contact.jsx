import { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./contact.module.css";

const contactInfo = [
  { name: "Phone", emod: "📞", info: "+1 (555) 123-4567" },
  { name: "Email", emod: "✉️", info: "info@nasexpress.com" },
  { name: "Address", emod: "📍", info: "123 Express Street Business District City, State 12345" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpenSnackbar(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
 
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHero}>
        <div className={styles.container}>
          <h1 className={styles.contactTitle}>Contact Nasexpress</h1>
          <p className={styles.contactSubtitle}>
            Get in touch with us for any inquiries or support
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>

              {contactInfo.map((el, index) => (
                <div key={index} className={styles.contactInfoCard}>
                  <div className={styles.contactInfoContent}>
                    <div className={styles.contactInfoItem}>
                      <div className={styles.contactIcon}>{el.emod}</div>
                      <div>
                        <h3>{el.name}</h3>
                        <p>{el.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.contactFormSection}>
              <div className={styles.contactFormPaper}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <h2 className={styles.formTitle}>Send us a Message</h2>

                  <div className={styles.formGrid}>
                    <div className={styles.formField}>
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                    <div className={styles.formField}>
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                    <div className={`${styles.formField} ${styles.fullWidth}`}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                    <div className={`${styles.formField} ${styles.fullWidth}`}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={6}
                      />
                    </div>
                    <div className={`${styles.formField} ${styles.fullWidth}`}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        className={styles.submitButton}
                        endIcon={<Send />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact; 
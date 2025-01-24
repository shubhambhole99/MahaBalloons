import { useCallback } from "react";
import React, { useState } from "react";

import Image from "next/image";
import FrameComponent3 from "../../components/frame-component3";
import BtnLearn from "../../components/btn-learn";
import FAQ3 from "../../components/f-a-q3";
import TextInput from "../../components/text-input";
import Button from "../../components/button";
import styles from "../desk-contact-us.module.css";
import FAQ from "../../components/f-a-q";
import contactData from "/Db/contact";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { contactUs } from "/api/commonApi";
import Gift from "../../components/Giftanunforgettable/index"
import Footer from "../../components/footer";


const DeskContactUs = () => {
  const [formData, setFormData] = useState({});
  const [checkTerms, setCheckTerms] = useState(false);
  const [isLoaidng, setIsLoading] = useState(false);
 
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    console.log("formData: ", formData);
    if (!formData?.name) {
      toast.info("Please fill your First name");
      return;
    }
    if (!formData?.last_name) {
      toast.info("Please fill your Last name");
      return;
    }
    if (!formData?.email) {
      toast.info("Please fill your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      toast.info("Please enter a valid email");
      return;
    }
    if (!formData?.phone) {
      toast.info("Please fill your phone");
      return;
    }
    if (!checkTerms) {
      toast.info("Please Accept our Terms");
      return;
    }

    setIsLoading(true);
    try {
      const response = await contactUs(formData);
      console.log("🚀 ~ handleChange ~ response:", response,response.status);
      if (response?.status == 200 || response?.status == 201) {
        toast.success("Thank you for sharing this with us");
        setFormData({});
      } else {
        toast.error("Oops!, something went wrong please try again later");
      }
    } catch (err) {
      console.log("Fomr Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className={styles.deskContactUs}>
      <FrameComponent3 />
      <ToastContainer/>
      <section className={styles.formContainerParent}>


        <div className={styles.formContainer}>



          <div className={styles.formFields}>
            <div className={styles.formInputs}>
              <div className={styles.inputRows}>
                <div className={styles.name}>Name</div>
                <div className={styles.textInput}>
                  <input
                    className="inputField"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={formData?.first_name}
                  />

                </div>
                <div className={styles.name}>Last Name</div>
                <div className={styles.textInput}>
                  <input
                    className="inputField"
                    name="last_name"
                    type="text"
                    onChange={handleChange}
                    value={formData?.last_name}
                  />

                </div>

              </div>
              <div className={styles.inputRows1}>
                <div className={styles.name}>Email</div>
                <div className={styles.textInput}>
                  {/* <div className={styles.placeholder}>Placeholder</div> */}
                  <input
                    className="inputField"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData?.email}
                  />
                </div>
              </div>
              <div className={styles.inputRows1}>
                <div className={styles.name}>Phone</div>
                <div className={styles.textInput}>
                  {/* <div className={styles.placeholder}>Placeholder</div> */}
                  <input
                    className="inputField"
                    name="phone"
                    type="phone"
                    onChange={handleChange}
                    value={formData?.phone}
                  />

                </div>
              </div>
              <div className={styles.inputRows}>
                <div className={styles.name}>Message</div>
                <div className={styles.messageInput}>
                  <div className={styles.textInput3}>
                    <div className={styles.placeholder}>Placeholder</div>
                    <textarea
                      className="inputField"
                      name="message"
                      type="text"
                      rows={8}
                      onChange={handleChange}
                      value={formData?.message}
                    />

                  </div>
                  <div className={styles.checkboxRow}>
                    <div className={styles.checkboxContainer}>
                      {/* <div className={styles.checkbox} /> */}
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        onChange={(e) => {
                          setCheckTerms(e.target.checked);
                        }}
                      />
                    </div>
                    <div className={styles.label}>
                      <span>{`I accept the `}</span>
                      <span>Terms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.btnLoad}>
                <div
                style={{
                  cursor:"pointer"
                }}
                   onClick={handleSubmit}
                  disabled={isLoaidng}
                  className={styles.submit}>{isLoaidng ? "Submitting" : "Submit"}
                </div>
              </div>
              <br/>
            </div>
          </div>

<br/>
<br/>
<br/>
         <Gift/>

          <FAQ
            content={contactData?.faqsList}
            title={"Frequently Asked Questions "}
          />

         
        </div>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={600}
          height={641}
          alt=""
          src="/placeholder-image-32@2x.png"
        />
      </section>
        <Footer
                icon="/icon-25@2x.png"
                iconFacebook="/icon--facebook.svg"
                iconInstagram="/icon--instagram.svg"
                iconX="/icon--x.svg"
                iconLinkedIn="/icon--linkedin.svg"
                iconYoutube="/icon--youtube.svg"
              />
    </div>
  );
};

export default DeskContactUs;

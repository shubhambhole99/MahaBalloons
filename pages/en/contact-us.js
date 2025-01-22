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


          <div className={styles.cta}>
            <div className={styles.container}>
              <div className={styles.column}>
                <h1 className={styles.heading}>
                  <p
                    className={styles.giftAnUnforgettable}
                  >{`Gift an Unforgettable Hot Air `}</p>
                  <p className={styles.giftAnUnforgettable}>
                    Balloon Adventure Today !!
                  </p>
                </h1>
              </div>
              <div className={styles.column1}>
                <div className={styles.placeholder}>
                  Customize and Gift a Hot Air Balloon Package for your loved
                  one and get a Free Adventure for Yourself ! for a limited Time
                  Only !!
                </div>
                <div className={styles.actions}>
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #fff"
                    btnLearnBackgroundColor="#fff"
                    button="Book Now"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #fff"
                    btnLearnBackgroundColor="unset"
                    button="WhatsApp Us"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
          </div>

          <FAQ
            content={contactData?.faqsList}
            title={"Frequently Asked Questions "}
          />

          <footer className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.links}>
                <div className={styles.column2}>
                  <Image
                    className={styles.mahaBalloonAdventuresLogo2}
                    loading="lazy"
                    width={94}
                    height={75}
                    alt=""
                    src="/maha-balloon-adventures-logo-2-1@2x.png"
                  />
                </div>
                <div className={styles.column3}>
                  <div className={styles.quickLinks}>Quick Links</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>About Us</div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Experiences</div>
                    </div>
                    <div className={styles.link2}>
                      <div className={styles.merchandise}>Merchandise</div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Things To Do</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column3}>
                  <div className={styles.quickLinks}>Company</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Contact Us</div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Blogs</div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Faqs</div>
                    </div>
                    <div className={styles.link2}>
                      <div className={styles.merchandise}>Careers</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column3}>
                  <div className={styles.quickLinks}>Support</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>+971502600101</div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.infomahaballoonadventurescom}>
                        info@mahaballoonadventures.com
                      </div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Margham Dubai, UAE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newslatter}>
                <div className={styles.newsletterContent}>
                  <div className={styles.quickLinks}>Subscribe</div>
                  <div className={styles.name}>
                    Join our newsletter to stay up to date on features and
                    releases.
                  </div>
                </div>
                <div className={styles.actions1}>
                  <div className={styles.form}>
                    <TextInput type="Default" />
                    <Button
                      darkMode={false}
                      iconPosition="No icon"
                      small={false}
                      style="Primary"
                      button="Subscribe"
                      buttonColor="#000"
                    />
                  </div>
                  <div className={styles.name}>
                    {`By subscribing you agree to with our `}
                    <span className={styles.privacyPolicy}>
                      Privacy Policy
                    </span>{" "}
                    and provide consent to receive updates from our company.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerLinks} data-acc-group>
              <div
                className={styles.credits}
                data-acc-item
                data-acc-header
                data-acc-original
              >
                <div className={styles.credits1}>
                  <div className={styles.moreInformations}>
                    More informations
                  </div>
                </div>
                <Image
                  className={styles.icon}
                  width={21}
                  height={21}
                  alt=""
                  src="/icon-25@2x.png"
                />
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.creditsOpen}
                  data-acc-header
                >
                  <div className={styles.credits1}>
                    <div className={styles.moreInformations}>
                      More informations
                    </div>
                  </div>
                  <Image
                    className={styles.icon}
                    width={21}
                    height={21}
                    alt=""
                    src="/icon-25@2x.png"
                  />
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className={styles.credits3}
                data-acc-item
                data-acc-header
                data-acc-original
              >
                <div className={styles.divider} />
                <div className={styles.row}>
                  <div className={styles.credits4}>
                    <div className={styles.moreInformations}>
                      <span>
                        © 2024 Designed with 💕in UAE by Prism Digital: D
                      </span>
                      <a
                        className={styles.igitalMarketingAgencyDubai}
                        href="https://www.prism-me.com/"
                        target="_blank"
                      >
                        <span>
                          <span className={styles.privacyPolicy}>
                            igital Marketing Agency Dubai.
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className={styles.footerLinks3}>
                      <div className={styles.termsOfService}>
                        Privacy Policy
                      </div>
                      <div className={styles.termsOfService}>
                        Terms of Service
                      </div>
                      <div className={styles.termsOfService}>
                        Cookies Settings
                      </div>
                    </div>
                  </div>
                  <div className={styles.socialLinks}>
                    <Image
                      className={styles.iconFacebook}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/icon--facebook.svg"
                    />
                    <Image
                      className={styles.iconFacebook}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/icon--instagram.svg"
                    />
                    <Image
                      className={styles.iconFacebook}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/icon--x.svg"
                    />
                    <Image
                      className={styles.iconLinkedin}
                      width={24}
                      height={24}
                      alt=""
                      src="/icon--linkedin.svg"
                    />
                    <Image
                      className={styles.iconLinkedin}
                      width={24}
                      height={24}
                      alt=""
                      src="/icon--youtube.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.creditsOpen}
                  data-acc-header
                >
                  <div className={styles.credits1}>
                    <div className={styles.moreInformations}>
                      More informations
                    </div>
                  </div>
                  <Image
                    className={styles.icon}
                    width={21}
                    height={21}
                    alt=""
                    src="/icon-25@2x.png"
                  />
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </footer>
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
    </div>
  );
};

export default DeskContactUs;

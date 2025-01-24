import Image from "next/image";
import TextInput from "./text-input";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./footer.module.css";
import { useRouter } from "next/router";
const Footer = ({
  className = "",
  icon,
  iconFacebook,
  iconInstagram,
  iconX,
  iconLinkedIn,
  iconYoutube,
}) => {
  const router=useRouter();
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.child1}>
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.column}>
            <Image
              className={styles.mahaBalloonAdventuresLogo2}
              loading="lazy"
              width={94}
              height={75}
              alt=""
              src="/maha-balloon-adventures-logo-2-1@2x.png"
            />
          </div>
          <div className={styles.column1}>
            <div onClickclassName={styles.quickLinks}>Quick Links</div>
            <div className={styles.footerLinks}>
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/why-us")} className={styles.aboutUs}>About Us</div>
              </div>
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/experiences")} className={styles.aboutUs}>Experiences</div>
              </div>
              {/* <div className={styles.link2}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/things-to-do")} className={styles.merchandise}>Merchandise</div>
              </div> */}
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/things-to-do")} className={styles.aboutUs}>Things To Do</div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.quickLinks}>Company</div>
            <div className={styles.footerLinks}>
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/contact-us")} className={styles.aboutUs}>Contact Us</div>
              </div>
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/blogs")} className={styles.aboutUs}>Blogs</div>
              </div>
              <div className={styles.link}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/things-to-do")} className={styles.aboutUs}>Faqs</div>
              </div>
              <div className={styles.link2}>
                <div style={{cursor:"pointer"}} onClick={()=> router.push("/en/things-to-do")} className={styles.merchandise}>Careers</div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
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
          <div className={styles.subscribeParent}>
            <div className={styles.quickLinks}>Subscribe</div>
            <div className={styles.joinOurNewsletter}>
              Join our newsletter to stay up to date on features and releases.
            </div>
          </div>
          <div className={styles.subscribeParent}>
            <div className={styles.form}>
              <TextInput type="Default" />
              <Button
                darkMode={false}
                iconPosition="No icon"
                small={false}
                style="Primary"
                button="Subscribe"
              />
            </div>
            <div className={styles.bySubscribingYouContainer}>
              {`By subscribing you agree to with our `}
              <span className={styles.privacyPolicy}>Privacy Policy</span> and
              provide consent to receive updates from our company.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.credits}>
          <div className={styles.credits1}>
            <div className={styles.moreInformations}>More informations</div>
          </div>
          <Image
            className={styles.icon}
            width={21}
            height={21}
            alt=""
            src={icon}
          />
        </div>
        <div className={styles.credits2}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.credits3}>
              <div className={styles.designedWithInContainer}>
                <span>© 2024 Designed with 💕in UAE by Prism Digital: D</span>
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
                <div className={styles.termsOfService}>Privacy Policy</div>
                <div className={styles.termsOfService}>Terms of Service</div>
                <div className={styles.termsOfService}>Cookies Settings</div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <Image
                className={styles.iconFacebook}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src={iconFacebook}
              />
              <Image
                className={styles.iconFacebook}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src={iconInstagram}
              />
              <Image
                className={styles.iconFacebook}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src={iconX}
              />
              <Image
                className={styles.iconFacebook}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src={iconLinkedIn}
              />
              <Image
                className={styles.iconYoutube}
                width={24}
                height={24}
                alt=""
                src={iconYoutube}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconFacebook: PropTypes.string.isRequired,
  iconInstagram: PropTypes.string.isRequired,
  iconX: PropTypes.string.isRequired,
  iconLinkedIn: PropTypes.string.isRequired,
  iconYoutube: PropTypes.string.isRequired,
};

export default Footer;

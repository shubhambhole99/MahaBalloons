import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import AboutUs from "../components/about-us";
import Arrows from "../components/arrows";
import BtnLearn from "../components/btn-learn";
import Slide from "../components/slide";
import FrameComponent2 from "../components/frame-component2";
import BlogPosts from "../components/blog-posts";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const DeskHome = () => {
  return (
    <>
    <h1 style={{border:"1px solid red"}} className="text-cyan-800 border-10px border-black bg-green-500">Hello</h1>
    <div className="w-full relative bg-background-color-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <AboutUs />
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-4 max-w-full text-left text-xl text-background-color-primary">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full max-w-full "
            >
              <SwiperSlide>
              <p class="border-red-600">This is green text.</p>

              </SwiperSlide>
              <SwiperSlide>
              <p class="text-green-500">This is green text.</p>

              </SwiperSlide>
              <SwiperSlide>
              <p class="text-green-500">This is green text.</p>

              </SwiperSlide>
            </Swiper>
        </div>


      <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-[60px] px-20 gap-10 text-left text-base text-text-primary font-text-small-link">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="self-stretch relative leading-[150%] font-semibold">
            Choose From The Best Hot Air Balloon Packages in Dubai
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-6 text-29xl">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit">
              Book Luxury Hot Air Balloon Packages in UAE
            </h1>
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <Image
                className="w-12 rounded-31xl max-h-full object-contain"
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows1@2x.png"
              />
              <Arrows fearrowUp="/fearrowup1@2x.png" />
            </div>
            <div className="relative text-lg leading-[150%] hidden">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
          </div>
        </div>
        <div className="self-stretch gap-6 grid grid-cols-[0px] [grid-row-gap:0px] [grid-column-gap:0px]">
          <div className="hidden flex-row items-center justify-start">
            <div className="rounded-31xl bg-olivedrab flex flex-row items-center justify-center py-2 px-4 text-background-color-primary">
              <div className="h-6 w-[87px] relative leading-[150%] font-medium inline-block">
                Wed 07 Aug
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-2 px-4">
              <div className="h-6 w-[82px] relative leading-[150%] inline-block">
                Thu 08 Aug
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-2 px-4">
              <div className="h-6 w-[73px] relative leading-[150%] inline-block">
                Fri 09 Aug
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-2 px-4">
              <div className="h-6 w-[78px] relative leading-[150%] inline-block">
                Sat 10 Aug
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-2 px-4">
              <div className="h-6 w-[82px] relative leading-[150%] inline-block">
                Sun 11 Aug
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-10 text-sm">
            <div className="flex-1 flex flex-col items-start justify-center gap-6">
              <div className="self-stretch flex flex-row items-center justify-start relative gap-2.5">
                <Image
                  className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover z-[0]"
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-2@2x.png"
                />
                <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                  <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                    <div className="h-[21px] w-14 relative leading-[150%] font-semibold inline-block">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-5xl">
                    <h3 className="m-0 w-[400px] h-[34px] relative text-inherit leading-[140%] font-semibold font-inherit inline-block">
                      CLASSIC PACKAGE
                    </h3>
                    <div className="relative text-base leading-[120%] font-semibold">
                      ADULTS: AED 1200 / CHILD: AED 1150
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[150%]">
                    Experience breathtaking beauty in the Dubai desert with our
                    Classic Hot Air Balloon Package. Enjoy stunning panoramic
                    views as you gently ascend into the sky at an accessible,
                    affordable price.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Time
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        45 - 60 Minutes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Location
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-4">
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-6">
              <div className="self-stretch flex flex-row items-center justify-start relative gap-2.5">
                <Image
                  className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover z-[0]"
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-3@2x.png"
                />
                <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                  <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                    <div className="h-[21px] w-14 relative leading-[150%] font-semibold inline-block">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-5xl">
                    <h3 className="m-0 w-[400px] h-[34px] relative text-inherit leading-[140%] font-semibold font-inherit inline-block">
                      MAJESTIC PACKAGE
                    </h3>
                    <div className="relative text-base leading-[120%] font-semibold">
                      ADULTS: AED 1300 / CHILD: AED 1250
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[150%]">
                    Elevate your adventure with our Deluxe Package. Enjoy
                    exclusive extras and luxurious touches as you float gently
                    over the stunning Dubai desert at sunrise, ensuring a
                    memorable, sophisticated journey.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Time
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        45 - 60 Minutes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Location
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-4">
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-6">
              <div className="self-stretch flex flex-row items-center justify-start relative gap-2.5">
                <Image
                  className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover z-[0]"
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-4@2x.png"
                />
                <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                  <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                    <div className="h-[21px] w-14 relative leading-[150%] font-semibold inline-block">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-5xl">
                    <h3 className="m-0 w-[400px] relative text-inherit leading-[140%] font-semibold font-inherit inline-block">
                      ROYAL PACKAGE
                    </h3>
                    <div className="relative text-base leading-[120%] font-semibold">
                      ADULTS: AED 1550 / CHILD: AED 1450
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[150%]">
                    Enjoy a complete desert experience with pick-up and drop-off
                    from Dubai. Start with unlimited refreshments before an
                    unforgettable 45-60 minute hot air balloon flight, followed
                    by a signed flight certificate.
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Time
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        45 - 60 Minutes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Location
                      </div>
                      <div className="self-stretch relative leading-[150%]">
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-4">
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-start p-20 box-border bg-[url('/cta@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-21xl text-background-color-primary font-text-small-link mq450:gap-[15px] mq750:gap-[30px] mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="self-stretch flex flex-row items-center justify-start gap-[60px] max-w-full lg:flex-wrap mq750:gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[610px] max-w-full mq1050:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              <p className="m-0">{`Gift an Unforgettable Hot Air `}</p>
              <p className="m-0">Balloon Adventure Today !!</p>
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start py-5 px-0 gap-6 text-base">
            <div className="relative leading-[150%] hidden">
              Customize and Gift a Hot Air Balloon Package for your loved one
              and get a Free Adventure for Yourself ! for a limited Time Only !!
            </div>
            <div className="h-12 flex flex-row items-start justify-start gap-4">
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
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-left text-base text-text-primary font-text-small-link mq750:pb-[25px] mq750:box-border mq1050:pb-[39px] mq1050:box-border">
        <div className="flex-1 bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-[60px] px-20 box-border gap-10 max-w-full mq750:gap-5 mq750:py-[25px] mq750:px-10 mq750:box-border mq1050:pt-[39px] mq1050:pb-[39px] mq1050:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Customized Hot Air Balloon Packages in Dubai
            </div>
            <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-6 max-w-full text-29xl">
              <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[745px] max-w-full mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px] mq1050:min-w-full">
                Best Personalized Hot Air Balloon Packages
              </h1>
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <Image
                  className="w-12 rounded-31xl max-h-full object-contain"
                  loading="lazy"
                  width={48}
                  height={48}
                  alt=""
                  src="/arrows-1@2x.png"
                />
                <Arrows arrowsHeight="unset" fearrowUp="/fearrowup1@2x.png" />
              </div>
              <div className="relative text-lg leading-[150%] hidden">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
            </div>
          </div>
          <div className="self-stretch gap-6 max-w-full grid grid-cols-[0px] [grid-row-gap:0px] [grid-column-gap:0px]">
            <div className="hidden flex-row items-center justify-start [row-gap:20px] mq750:flex-wrap">
              <div className="rounded-31xl bg-olivedrab flex flex-row items-center justify-center py-2 px-4 text-background-color-primary">
                <div className="relative leading-[150%] font-medium">
                  Wed 07 Aug
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-2 px-4">
                <div className="relative leading-[150%]">Thu 08 Aug</div>
              </div>
              <div className="flex flex-row items-center justify-center py-2 px-4">
                <div className="relative leading-[150%]">Fri 09 Aug</div>
              </div>
              <div className="flex flex-row items-center justify-center py-2 px-4">
                <div className="relative leading-[150%]">Sat 10 Aug</div>
              </div>
              <div className="flex flex-row items-center justify-center py-2 px-4">
                <div className="relative leading-[150%]">Sun 11 Aug</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-10 max-w-full text-sm lg:flex-wrap lg:justify-center lg:grid-cols-[repeat(2,_minmax(300px,_520px))] mq750:gap-5 mq750:grid-cols-[minmax(300px,_1fr)]">
              <div className="flex-1 flex flex-col items-start justify-center gap-6">
                <div className="self-stretch flex flex-row items-center justify-start relative gap-2.5 max-w-full">
                  <Image
                    className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-5@2x.png"
                  />
                  <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                    <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                      <div className="relative leading-[150%] font-semibold">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-4 max-w-full text-base">
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center gap-4 text-5xl">
                      <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                        CELESTIAL PRIVATE ROMANCE
                      </h3>
                      <div className="relative text-base leading-[120%] font-semibold">
                        PRICE ON REQUEST /
                      </div>
                    </div>
                    <div className="relative leading-[150%]">
                      Elevate your proposal to new heights with this
                      unforgettable hot air balloon ride over the Dubai desert.
                      Experience a magical sunrise ride, pop the question, and
                      enjoy a delightful breakfast together.
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-center gap-2">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Time
                        </div>
                        <div className="self-stretch relative leading-[150%]">
                          45 - 60 Minutes
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-center gap-2 max-w-full">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Location
                        </div>
                        <div className="w-[401px] relative leading-[150%] inline-block max-w-full">
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-12 flex flex-row items-start justify-start gap-4">
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-6">
                <div className="self-stretch flex flex-row items-center justify-start relative gap-2.5 max-w-full">
                  <Image
                    className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-6@2x.png"
                  />
                  <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                    <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                      <div className="relative leading-[150%] font-semibold">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-4 max-w-full text-base">
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center gap-4 text-5xl">
                      <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                        GROUP BOOKING
                      </h3>
                      <div className="relative text-base leading-[120%] font-semibold">
                        PRICE ON REQUEST /
                      </div>
                    </div>
                    <div className="relative leading-[150%]">
                      Enjoy exclusive group rates, tailored packages, and
                      personalized service:We offer tailored arrangements for
                      all group types, ensuring a unique and personalized
                      experience. Whether for family, friends, or colleagues.
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-center gap-2">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Time
                        </div>
                        <div className="self-stretch relative leading-[150%]">
                          45 - 60 Minutes
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-center gap-2 max-w-full">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Location
                        </div>
                        <div className="w-[401px] relative leading-[150%] inline-block max-w-full">
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-12 flex flex-row items-start justify-start gap-4">
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-6 max-w-full">
                <div className="w-[400px] flex flex-row items-center justify-start relative gap-2.5">
                  <Image
                    className="h-[300px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-7@2x.png"
                  />
                  <div className="!m-[0] absolute top-[24px] left-[24px] hidden flex-row items-start justify-start z-[1]">
                    <div className="rounded-2xl bg-background-color-primary flex flex-row items-center justify-start py-1 px-3">
                      <div className="relative leading-[150%] font-semibold">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-4 max-w-full text-base">
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center gap-4 max-w-full text-5xl">
                      <h3 className="m-0 w-[401px] relative text-inherit leading-[140%] font-semibold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
                        CORPORATE EVENT
                      </h3>
                      <div className="relative text-base leading-[120%] font-semibold whitespace-nowrap">
                        PRICE ON REQUEST /
                      </div>
                    </div>
                    <div className="w-[400px] relative leading-[150%] inline-block">
                      CORPORATE EVENT Take your corporate event to new heights.
                      4000 feet above sea level to be exact! Let your next
                      corporate adventure be the best one yet for your friends
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-center gap-2 max-w-full">
                        <div className="w-[401px] relative leading-[150%] font-semibold inline-block">
                          Time
                        </div>
                        <div className="w-[401px] relative leading-[150%] inline-block">
                          45 - 60 Minutes
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-center gap-2 max-w-full">
                        <div className="w-[401px] relative leading-[150%] font-semibold inline-block">
                          Location
                        </div>
                        <div className="w-[401px] relative leading-[150%] inline-block">
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[284px] h-12 flex flex-row items-start justify-start gap-4">
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[60px] box-border max-w-full text-left text-base text-text-primary font-text-small-link mq750:pl-10 mq750:pr-10 mq750:pb-[39px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
          <div className="self-stretch flex flex-row items-end justify-center max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="relative leading-[150%] font-semibold inline-block max-w-full">
                Customer Feedback about the best hot air balloon in Uae
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-4 text-29xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                  Customer Testimonials
                </h1>
                <div className="relative text-lg leading-[150%] hidden">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch gap-4 grid grid-cols-[repeat(auto-fit,308px)] [grid-row-gap:0px] [grid-column-gap:16px] text-background-color-primary lg:flex-wrap lg:grid lg:grid-cols-[repeat(auto-fit,308px)] lg:[grid-row-gap:0px] lg:[grid-column-gap:16px]">
            <div className="rounded-2xl overflow-hidden flex flex-row items-end justify-between p-6 box-border bg-[url('/slide-preview@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[370px] gap-5 lg:min-h-[auto] mq450:flex-wrap mq450:justify-center mq450:flex-1">
              <div className="relative leading-[150%] hidden">
                “Borem ipsum dolor sit amet, consectetur adipiscing elit Nunc
                vulputate. Borem ipsum dolor sit amet.”
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[150%] inline-block min-w-[32px]">
                  Ajay
                </div>
              </div>
              <Image
                className="h-11 w-11 relative overflow-hidden shrink-0"
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/play-button2.svg"
              />
            </div>
            <Slide perfumes="Danielle J" playButton="/play-button-11.svg" />
            <Slide
              slideMinWidth="unset"
              slideContentBackgroundImage="url('/23@3x.png')"
              perfumes="Suhail Ismail"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-11.svg"
            />
            <Slide
              slideMinWidth="unset"
              slideContentBackgroundImage="url('/22@3x.png')"
              perfumes="Shweta Dubey"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-11.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-2">
                <div className="h-2 w-2 relative rounded-[50%] bg-text-primary" />
                <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
                <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
                <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
                <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <Image
                className="w-12 rounded-31xl max-h-full object-contain"
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows-1@2x.png"
              />
              <Arrows arrowsHeight="48px" fearrowUp="/fearrowup1@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <BlogPosts />
      <Footer
        icon="/icon-20@2x.png"
        iconFacebook="/icon--facebook12.svg"
        iconInstagram="/icon--instagram12.svg"
        iconX="/icon--x11.svg"
        iconLinkedIn="/icon--linkedin11.svg"
        iconYoutube="/icon--youtube2.svg"
      />
    </div>
    </>
  );
};

export default DeskHome;

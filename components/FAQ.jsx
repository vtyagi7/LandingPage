"use client";
import React, { useState } from 'react'
import Accordion from './Accordion'



const FAQ = () => {
    const [open, setOpen]= useState(false);

    const toggle = (index) =>{
        if(open === index){
            return setOpen(null)
        }
        return setOpen(index)
    }

    const accordionDataGen =[
        {   id:0,
            title: "What is radR?",
            text: "radR is a cutting-edge platform dedicated to transforming the retail landscape through innovative technology solutions. We focus on enhancing customer experiences, streamlining operations, and leveraging data analytics to empower retailers to thrive in the digital age.",
        },
        {   id:1,
            title: "How does radR make retail future-ready?",
            text: "We equip retailers with advanced tools and technologies such as AI-driven analytics, IoT integration for smart inventory management, and seamless omnichannel platforms that enhance customer engagement and optimize operational efficiency.",
        },
        {   id:2,
            title: "Who can benefit from radR's services?",
            text: "Our services are designed for a broad range of retail businesses, from small boutiques to large retail chains. Anyone looking to upgrade their retail operations and customer service will find valuable resources and support with radR.",
        }

    ]

    const accordionDataTech=[
        {   id:3,
            title: "What technologies does radR use?",
            text: "radR harnesses the power of artificial intelligence, machine learning, Internet of Things (IoT), and cloud computing to provide comprehensive solutions that address the unique challenges of modern retail.",
        },
        {   id:4,
            title: "Is radR compatible with existing retail management systems? ",
            text: "Yes, our platform is built to be flexible and compatible with existing retail management systems. We can integrate seamlessly with your current setup to enhance capabilities without disrupting ongoing operations.",
        }
    ]

    const accordionDataSer =[
        {   id:5,
            title: "What kind of customer support does radR offer?",
            text: "We offer 24/7 customer support through various channels including phone, email, and live chat. Our dedicated team is always ready to assist you with any issues or questions you may have.",
        },
        {   id:6,
            title: "How can I get started with radR?",
            text: "Getting started with radR is easy. Just reach out to us through our website or give us a call. Our team will guide you through the initial setup and provide all the necessary training and resources.",
        }

    ]
    const accordionDataPr=[
        {   id:7,
            title: "What are the pricing plans available?",
            text: "radR offers various pricing plans tailored to different business sizes and needs. Please visit our pricing page for detailed information or contact our sales team for a customized quote.",
        },
        {   id:8,
            title: "Is there a trial period for new users?",
            text: "Yes, we offer a trial period so you can explore our features and see how radR can transform your business. Contact us to learn more about our trial options",
        }
    ]

  return (
    <div id="FAQ"className=" bg-[url('/faqs.png')]  w-screen   bg-no-repeat  bg-cover">
        <div className='mx-auto container padding-container flex flex-col padding-container-y gap-y-10'>

            <div className='  basis-1/3 bg-[#372601]/45 backdrop-blur-[14px] box-border py-4 flex items-center justify-center'>
                 <div className=' box-border'>
                    <h2 className=' lg:bold-48  xs:bold-36 font-playfair text-[#fff] text-center'>Frequently Asked Questions</h2>
                </div>
            </div>

            <div className='basis-2/3 backdrop-blur-[14px] box-border p-4 items-center justify-center'>
                <div>
                    <div className='bg-col1/50 backdrop-blur-md w-auto py-2'>
                        <h3 className=' md:bold-28 xs:bold-20 font-playfair text-[#fff] text-center' >General FAQs</h3>
                    </div>
                    {/* <Accordion items={generalItems}/> */}

                    {accordionDataGen.map((data)=> {
                        return <Accordion
                                key={data.id}
                                open={data.id === open}
                                title={data.title}
                                desc={data.text}
                                toggle={()=> toggle(data.id)}
                                className="p-2"
                            />;
                    })}


                </div>
                
                <br/>
                <div>
                    <div className='bg-col1/50 backdrop-blur-md w-auto py-2'>
                        <h3 className=' md:bold-28 xs:bold-20 font-playfair text-[#fff] text-center'>Technical FAQs </h3>
                    </div>
                     {accordionDataTech.map((data)=> {
                        return <Accordion
                                key={data.id}
                                open={data.id === open}
                                title={data.title}
                                desc={data.text}
                                toggle={()=> toggle(data.id)}
                                className="p-2"
                            />;
                    })}

                </div>
                <br/>
                <div>
                    <div className='bg-col1/50 backdrop-blur-md w-auto py-2'>
                    <h3 className=' md:bold-28 xs:bold-20 font-playfair text-[#fff] text-center'>Service and Support FAQs</h3>
                    </div>
                    {accordionDataSer.map((data)=> {
                        return <Accordion
                                key={data.id}
                                open={data.id === open}
                                title={data.title}
                                desc={data.text}
                                toggle={()=> toggle(data.id)}
                                className="p-2"
                            />;
                    })}
                    
                </div>
                
                <br/>
                <div>
                    <div className='bg-col1/50 backdrop-blur-md w-auto py-2'>
                    <h3 className=' md:bold-28 xs:bold-20 font-playfair text-[#fff] text-center'>Pricing and Subscription FAQs</h3>
                    </div>
                    {accordionDataPr.map((data)=> {
                        return <Accordion
                                key={data.id}
                                open={data.id === open}
                                title={data.title}
                                desc={data.text}
                                toggle={()=> toggle(data.id)}
                                className="p-2"
                            />;
                    })}

                </div>


            </div>
        </div>
        


    </div>
  )
}

export default FAQ
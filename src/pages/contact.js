import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import {BsArrowRight} from "react-icons/bs";
import Layout from "@/components/Layout";
import {useState} from "react";

const Contact = () => {

        const formInitialDetails = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        const [formDetails, setFormDetails] = useState(formInitialDetails)
        const [buttonText, setButtonText] = useState("Envoyer")
        const [status, setStatus] = useState({})

        const onFormUpdate = (category, value) => {
            setFormDetails({...formDetails, [category]: value})
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            setButtonText("Envoi en cours...")
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(formDetails)
            })
            setButtonText("Envoyer")
            let result = await response.json()
            setFormDetails(formInitialDetails)
            if (result.code === 200) {
                setStatus({success: true, message: "Message envoyé"})
            } else {
                setStatus({success: false, message: "Une erreur est survenue, veuillez réessayer"})
            }
        }

    return (
        <>
            <Head>
                <title>Eric Tourvieille | Contact</title>
                <meta name="description" content="Eric Tourvieille Développeur Web Portfolio"/>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="Contactez moi !"
                        className="!text-7xl mb-20"
                    />
                    {/* Contact Form */}
                    <div className='w-full flex flex-col items-center justify-center'>
                    <div className='w-2/3 mx-auto flex items-center justify-center relative rounded-br-2xl
                        rounded-3xl border border-solid border-dark bg-white shadow-2xl p-24 mb-16 dark:bg-gray-800 dark:border-light
                        '>
                        <div className='border-primary dark:bg-light'/>
                        <form
                            onSubmit={handleSubmit}
                            className="flex-1 flex flex-col gap-12 w-full mx-auto">

                            <div className="flex justify-between gap-x-16 gap-y-36 w-full">
                                <label htmlFor="name" className="w-full font-bold text-xl text-blue-800">Nom
                                <input type="text"
                                       value={formDetails.name}
                                       required onChange={(e) => onFormUpdate('name', e.target.value)}
                                       className="input-primary w-full h-[80px] shadow-dark-100 drop-shadow-xl"/>
                                </label>
                                <label htmlFor="email" className="w-full font-bold text-xl text-blue-800">Email
                                <input type="text"
                                       value={formDetails.email}
                                       required onChange={(e) => onFormUpdate('email', e.target.value)}
                                       className="input-primary w-full h-[80px] shadow-dark-100 drop-shadow-xl"/>
                                </label>
                            </div>

                            <label htmlFor="subject" className="w-full font-bold text-xl text-blue-800">Sujet
                            <input type="text"
                                   value={formDetails.subject}
                                   required onChange={(e) => onFormUpdate('subject', e.target.value)}
                                   className="input-primary w-full h-[80px] shadow-dark-100 drop-shadow-xl"/>
                            </label>
                            <label htmlFor="message" className="w-full font-bold text-xl text-blue-800">Message
                            <textarea value={formDetails.message}
                                      required onChange={(e) => onFormUpdate('message', e.target.value)}
                                      className="input-primary w-full h-[200px] mb-12 shadow-dark-100 drop-shadow-xl"/>
                            </label>

                            {
                                status.message &&
                                <div>
                                    <h2 className={status.success === false ? "alert-danger" : "success"}>{status.message}</h2>
                                </div>
                            }

                            <button
                                type="submit"
                                className="btn-primary w-1/3 dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">
                                <span>{buttonText}</span>
                                <BsArrowRight className={"w-[24px] ml-2"}/>
                            </button>
                        </form>
                    </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Contact;
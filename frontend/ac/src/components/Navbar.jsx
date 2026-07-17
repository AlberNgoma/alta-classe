import logo from "../assets/LOGO.png"
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";



export default function Navbar() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className="w-full bg-primary min-h-15 flex item-center justify-around">

                <section className="flex items-center justify-center cursor-pointer">
                    <Link to="/"><img src={logo} className="w-10" alt="logo" /></Link>

                </section>

                <section className="hidden md:flex items-center justify-center gap-5">
                    <Link to="/" className="font-outfit text-background text-md hover:scale-105 duration-300 ease-in hover:text-secondary">Início</Link>
                    <Link to="/" className="font-outfit text-background text-md hover:scale-105 duration-300 ease-in hover:text-secondary">Catálogo</Link>
                    <Link to="/" className="font-outfit text-background text-md hover:scale-105 duration-300 ease-in hover:text-secondary">Destaque</Link>
                    <Link to="/" className="font-outfit text-background text-md hover:scale-105 duration-300 ease-in hover:text-secondary">Sobre</Link>
                    <Link to="/" className="font-outfit text-background text-md hover:scale-105 duration-300 ease-in hover:text-secondary">Contactos</Link>
                </section>

                <section className="md:hidden flex items-center justify-center cursor-pointer">
                    {menu ? (
                        <motion.p animate={{ rotate: 360, transition: { duration: 0.8 } }} onClick={() => setMenu(!menu)} className="text-3xl text-background"><MdOutlineClose /></motion.p>
                    ) :
                        <HiOutlineMenuAlt3 onClick={() => setMenu(!menu)} className="text-3xl text-background" />
                    }

                </section>


                <AnimatePresence>

                    {menu && (
                        <motion.section
                            initial={{ y: -10 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                            exit={{ transition: { duration: 0.2 }, y: 0, opacity: 0 }}

                            className=" absolute w-full min-h-30 top-14 flex items-center justify-center flex-col gap-3 py-3 bg-primary">
                            <Link to="/" className="font-outfit text-white text-md">Início</Link>
                            <Link to="/" className="font-outfit text-white text-md">Catálogo</Link>
                            <Link to="/" className="font-outfit text-white text-md">Destaque</Link>
                            <Link to="/" className="font-outfit text-white text-md">Sobre</Link>
                            <Link to="/" className="font-outfit text-white text-md">Contactos</Link>

                        </motion.section>

                    )}

                </AnimatePresence>


            </div>

        </>
    )
}
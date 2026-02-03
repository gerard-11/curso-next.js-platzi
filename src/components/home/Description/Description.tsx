'use client'
import style from './Description.module.scss'
import Image from  'next/image'
import {useState} from "react";
import classNames from "classnames/bind";


const PLACEHOLDER_IMG = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA8AGsDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAwQFBgIBAAf/xAAiEAACAgMBAAIDAQEAAAAAAAAAAQIDBBEhMQUSEzJBI1H/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/xAAfEQADAAICAwEBAAAAAAAAAAAAAQIDERIhBBMxFCL/2gAMAwEAAhEDEQA/APx6x8JuY+MalZwSyZbTN3BjF2Zj5KL/ADNiZZyqvtNi6xE34IyYnvaG/nqvgpiwc7opI2vxFbjGJG+Ow1+TejVfH06SBWJ77KrxXP0tYC4i3j+IlYcdJFWjiQ6cYHDQ7F8ObPDyMuHFkuB+tlaEsrxkPP8AGWsl8ZGzFvYLgozWfHbZKdb2y/l17bEHR3wW4JxBO/f9BTnsmwyO+h4WbOxWHRPH/pnU4blsLVT9n4fV9ZRxq0Z6lI7uKUkGwsdLXC5iV60J4sPCrjoBSVcpjuOtaH62J0jMXwdMIx3Ax9uA7J8OXIFZIP1oy1IK+RMye7HLpCF8vRVwBon3x2xZ1jdrA7M7kNIwcE9jdTBKOjuL0dO72TDHAeol0q4svCFCzRQxL/OmW2dOci0aPGl4U6JeEHFu3orY1gpUU8qK1TGIsSplsagxs5BFVs7bA2MKwFvgfsQihS+XpOyLNbG8mWkyNmXfXYDvYp9HN13fQDvX/STm56rb6T38m9+MXx2B7EgkocATehya4JXFq2a66QKVv1C42Vqa6JWfszyv90Rsw1mpfDWYORvXS7iWb0ZH45vZpsF8Rmp6Jjzui/jy3oerZNxvEUagebNCrYV+C93gz/Ba8nNhErMfGZr5a76Rk9mjzfGZH55/5TCmm2JydIzd9rnNybA/c8n6eCsuauWkISP/2Q=='
const Description = () => {
    const [hasBorder, setHasBorder] = useState<boolean>(false)
    const cx=classNames.bind(style)
    const buttonStyles=cx('Description__button',{
        'Description__button--border':hasBorder
    })
    const handleClick=()=> setHasBorder(!hasBorder)
    return (
        <section className={style.main}>
            <button onClick={handleClick} className={style.Description__button}>
                <div className={style.imgContainer}>
                    <Image src='/images/image-para-next.jpeg'
                           alt='imagen del sitio'
                           fill
                           placeholder='blur'
                           blurDataURL={PLACEHOLDER_IMG}
                           className={buttonStyles}
                    />
                </div>
            </button>
            <div className={style.textCont}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>

    )
}
export {Description}

import Heading from '../../components/heading'
import boys from '../../assets/boy.png'
import girls from '../../assets/girl.png'
import todd from '../../assets/kid.png'

const Programs = () => {

    return (
        <>
            <div className='flex lg:justify-center mx-9 lg:mx-0'>
                <h2 className='font-bold text-xl lg:text-4xl mb-5 text-black'>PROGRAMS</h2>
            </div>
            <div class="py-12 flex flex-col bg-[#bfeaad] lg:space-x-8 bg-ground bg-contain ">

                <div className='lg:flex w-full   items-center justify-evenly m-auto'>
                    <div className='mt-10  flex flex-col justify-center items-center'>
                        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                            <img src={girls} class="w-64 h-64 rounded-full object-cover" alt="girls" />

                            <div
                                class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  border-4 border-black overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <img src={boys} class="w-64 h-64 rounded-full object-cover" alt="boys" />
                            </div>



                        </div>
                        <div className='max-w-max px-4 bg-white mt-2 rounded-lg'>
                            <p className='flex justify-center text-2xl font-bold text-black'>Girls</p>
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col justify-center items-center'>
                        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                            {/* <img src="https://images.unsplash.com/photo-1624669240815-815a23372f37?" alt="baby with headphones" class="w-64 h-64 rounded-full object-cover" /> */}
                            <img src={boys} class="w-64 h-64 rounded-full object-cover" />

                            <div
                                class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <img src={todd} class="w-64 h-64 rounded-full object-cover" />
                            </div>

                        </div>
                        <div className='max-w-max px-4 bg-white mt-2 rounded-lg'>
                            <p className='flex justify-center text-2xl font-bold text-black'>BOYS</p>
                        </div>


                    </div>

                    <div className='mt-10 flex flex-col justify-center items-center'>
                        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                            {/* <img src="https://images.unsplash.com/photo-1624669240815-815a23372f37?" alt="baby with headphones" class="w-64 h-64 rounded-full object-cover" /> */}
                            <img src={todd} class="w-64 h-64 rounded-full object-cover" />

                            <div
                                class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <img src={boys} class="w-64 h-64 rounded-full object-cover" />
                            </div>

                        </div>
                        <div className='max-w-max px-4 bg-white mt-2 rounded-lg'>
                            <p className='flex justify-center text-2xl font-bold text-black'>Toddlers</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs
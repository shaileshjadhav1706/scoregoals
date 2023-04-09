
import Heading from '../../components/heading'
import boys from '../../assets/boy.jpeg'
import girls from '../../assets/girl.jpeg'
import todd from '../../assets/todd.jpeg'

const Programs = () => {

    return (
        <div class="py-12 flex flex-col bg-[#bfeaad] lg:space-x-8">
            <div className='flex lg:justify-center mx-9 lg:mx-0'>
                <Heading title="PROGRAMS" />
            </div>

            <div className='lg:flex  items-center justify-evenly m-auto'>
                <div>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={girls} class="w-64 h-64 rounded-full object-cover" />

                        <div
                            class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <img src={boys} class="w-64 h-64 rounded-full object-cover" />
                        </div>



                    </div>
                    <p className='flex justify-center text-xl text-black mt-2'>Girls</p>
                </div>

                <div className='mt-10'>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        {/* <img src="https://images.unsplash.com/photo-1624669240815-815a23372f37?" alt="baby with headphones" class="w-64 h-64 rounded-full object-cover" /> */}
                        <img src={boys} class="w-64 h-64 rounded-full object-cover" />

                        <div
                            class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <img src={todd} class="w-64 h-64 rounded-full object-cover" />
                        </div>

                    </div>
                    <p className='flex justify-center text-xl text-black mt-2'>Boys</p>

                </div>

                <div className='mt-10'>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        {/* <img src="https://images.unsplash.com/photo-1624669240815-815a23372f37?" alt="baby with headphones" class="w-64 h-64 rounded-full object-cover" /> */}
                        <img src={todd} class="w-64 h-64 rounded-full object-cover" />

                        <div
                            class="w-64 h-64 rounded-full absolute top-0 right-0 bottom-0 left-0  overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            <img src={boys} class="w-64 h-64 rounded-full object-cover" />
                        </div>

                    </div>
                    <p className='flex justify-center text-xl text-black mt-2'>Toddlers</p>

                </div>
            </div>
        </div>
    )
}

export default Programs
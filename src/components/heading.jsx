

const Heading = ({ title, as = "h2" }) => {

    return (
        <>
            {as == 'h2' && <h2 className='font-bold text-xl lg:text-3xl mb-5'>{title}</h2>}

        </>
    )
}

export default Heading
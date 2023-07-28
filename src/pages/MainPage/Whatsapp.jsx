import { whatsapp } from '../../assets'


function WhatsappComponent() {
              {/* whatsapp */}

    return (  
          <button className='fixed bottom-5 right-7 cursor-pointer z-50'>
          <div className='w-16 h-16 rounded-full  border-white border-4'>
            <a
              href="https://wa.me/8286925969"
              class="whatsapp_scoregoals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </button>
    );
}

export default WhatsappComponent;
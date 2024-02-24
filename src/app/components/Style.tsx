import React from 'react';
import im from '../../allimg/style/change_blouse.svg'
import Image from 'next/image';
const Style = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3'>
            <button>

          <Image src={im} alt=''/>
            </button>
            <button>

          <Image src={im} alt=''/>
            </button>
            <button>

          <Image src={im} alt=''/>
            </button>
            {/* <button>

          <Image src={im} alt=''/>
            </button>
            <button>

          <Image src={im} alt=''/>
            </button> */}
          
        </div>
    );
};

export default Style;
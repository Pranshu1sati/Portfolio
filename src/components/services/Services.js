import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className='container'>
        <div className='servies_container'>
        <div>
            <article className='service'>
                <div className='service_head'>
                    <h3>UI/UX Design</h3>
                </div>
                <ul className='service_list'>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            </div>
            {/* End of ui design */}
            <div>
            <article className='service'>
                <div className='service_head'>
                    <h3>Web Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            </div>
            {/* End of web development */}
            <div>
            <article className='service'>
                <div className='service_head'>
                    <h3>Machine Learning</h3>
                </div>
                <ul className='service_list'>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ispum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            </div>
            {/* end of ml */}
            </div>
        </div>
    </section>
  )
}

export default Services
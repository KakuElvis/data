import React from 'react'

const Home = () => {
  return (
    <>
        <header className='flex'>
            {/* <nav className="px-40 flex justify-between items-center fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-logo/50 backdrop-blur-md"> */}
            <nav className="px-40 flex justify-between items-center absolute top-0 left-0 right-0 z-50 bg-green-900 rounded-xl">
                <div class="py-5 font-bold">
                    <a href="#home">
                        {/* <img src="./src/assets/logo1.png" className=" " alt="" width="100" height="100" /> */}
                        <span class="text-white">Data Analytic Hub</span>
                    </a>
                </div>
                
                <div>
                    <ul className='flex items-center font-bold justify-center space-x-6 text-white'>
                        <li>
                            <a href="#home" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Coffee</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Bakery</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Shop</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">About</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <section className='py-40 bg-cover bg-center bg-no-repeat bg-green-900 rounded-xl'>
            {/* <div className='py-40 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/milk.webp')" }}></div> */}
            <div className=' py-2 px-40'>
                <h2 className='text-red-500'>Welcome!</h2>
                <h1 className='text-red-500 font-semibold'>We serve the richest coffee in Accra!</h1>
                <button className='bg-red-200 text-footer rounded-full text-sm px-3 cursor-pointer font-semibold'>Order Now</button>
            </div>
        </section>

        <section className='py-5'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Why Choose Us?</h2>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quidem?</p>
            </div>
            <div className='flex gap-5 p-5'>
                <div className='bg-green-800 rounded-lg p-5 border shadow-2xl items-center text-center justify-center'>
                    <img src="/src/assets/icon.png" alt="" className='bg-white rounded-lg' width="50" height="50" />
                    <h2 className='text-xl font-bold '>Real-Time Analytics</h2>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab voluptate animi et reiciendis quae dolorum, totam repudiandae libero quidem!</p>
                </div>
                <div className='bg-white rounded-lg p-5 border shadow-2xl items-center text-center justify-center'>
                    <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                    <h2 className='text-xl font-bold '>Real-Time Analytics</h2>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab voluptate animi et reiciendis quae dolorum, totam repudiandae libero quidem!</p>
                </div>
                <div className='bg-white rounded-lg p-5 border shadow-2xl items-center text-center justify-center'>
                    <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                    <h2 className='text-xl font-bold '>Real-Time Analytics</h2>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab voluptate animi et reiciendis quae dolorum, totam repudiandae libero quidem!</p>
                </div>
            </div>
        </section>

        <section className='p-5'>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold'>Powerful Features to Supercharge <br /> Your Analytics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, error?</p>
            </div>
            <div className='flex gap-5 '>
                <div className='bg-gray-400 py-2 rounded-xl p-2 w-1/3'>
                    <div className='bg-gray-200 rounded-xl p-2  flex justify-center'>
                        <img src="/src/assets/analysis.jpg" alt="" className='rounded-xl' width="200" height="200"/>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-bold'>Real-Time Data Monitoring</h2>
                        <p>Lorem ipsum dolor sit amet  id.</p>
                    </div>
                </div>
                <div className='bg-gray-400 py-2 rounded-xl p-2 w-1/2'>
                    <div className='bg-gray-200 rounded-xl p-2  flex justify-center'>
                        <img src="/src/assets/analysis.jpg" alt="" className='rounded-xl' width="200" height="200"/>
                    </div>
                    <div className='p-2'>
                        <h2>Real-Time Data Monitoring</h2>
                        <p>Lorem ipsum dolor sit amet  id.</p>
                    </div>
                </div>
                <div className='bg-gray-400 py-2 rounded-xl p-2'>
                    <div className='bg-gray-200 rounded-xl p-2  flex justify-center'>
                        <img src="/src/assets/analysis.jpg" alt="" className='rounded-xl' width="200" height="200"/>
                    </div>
                    <div className='p-2'>
                        <h2>Real-Time Data Monitoring</h2>
                        <p>Lorem ipsum dolor sit amet  id.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-green-800'>
            <div className='flex px-10 space-x-30 justify-center py-5'>
                <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
                <img src="/src/assets/icon.png" alt="" className='bg-green-800 rounded-lg' width="50" height="50" />
            </div>

        </section>

        <section className='p-5'>
            <div className=' text-center'>
                <h2 className='font-bold'>Choose your plan</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex gap-5 px-40 py-5 justify-center'>
                <div className='bg-gray-100 rounded-lg p-5'>
                    <h2 className='text-xl font-bold '>Real-Time Analytics</h2>
                    <p>Lorem, ipsum dolor sit amet</p>
                    <p className='text-2xl font-bold'>$50</p>
                    <h4 className='bg-green-800 text-white font-bold px-5'>Executive</h4>
                    <div className=''>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                    </div>
                    <h2 className='text-black font-bold text-center'>Subscribe</h2>
                </div>
                <div className='bg-green-800 rounded-lg p-5'>
                    <h2 className='text-xl font-bold '>Real-Time Analytics</h2>
                    <p>Lorem, ipsum dolor sit amet</p>
                    <p className='text-2xl font-bold text-white'>$150</p>
                    <h4 className='bg-white text-black font-bold px-5'>Executive</h4>
                    <div>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                    </div>
                    <h2 className='text-white font-bold text-center'>Subscribe</h2>
                </div>
                <div className='bg-gray-100 rounded-lg p-5'>
                    <h2 className='text-xl font-bold'>Real-Time Analytics</h2>
                    <p>Lorem, ipsum dolor sit amet</p>
                    <p className='text-2xl font-bold'>$100</p>
                    <h4 className='bg-green-800 text-white font-bold px-5'>Executive</h4>
                    <div>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                    </div>
                    <h2 className='text-black font-bold text-center'>Subscribe</h2>
                </div>
            </div>
        </section>

        <section className='bg-gray-100'>
            <div>
                <div className='text-center py-5'>
                    <h1 className='font-bold'>What our customers say</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eos.</p>
                </div>
                <div className='flex flex-row-4 gap-5 px-5 py-5'>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                        <div className='flex gap-2 text-center py-2'>
                            <img src="/src/assets/data.jpg" alt=""  width="40" height="40" />
                            <h2 className='font-bold'>kwame</h2>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                    </div>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                    </div>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                    </div>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                    </div>
                    <div className='bg-white rounded-lg p-5 w-1/3'>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores iure tempore assumenda quia! Reprehenderit ut placeat in. Blanditiis, commodi.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className=' '>
            <div className='mt-30 place-items-center'>
                <div className='absolute bg-green-800 rounded-2xl py-10 px-5 text-center border-2 border-white'>
                    <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur elit.</p>
                    <button className='bg-white rounded-sm px-2 font-semibold'>Check Out</button>
                </div>
            </div>
        </section>
        <section className='py-10'>
        </section>

        <footer className='bg-green-800 py-12'>
            <div className='flex space-x-5 items-center justify-between p-5 text-white'>
                <div>
                    <h1 className='font-bold text-xl'>Ehun Data Analytics</h1>
                    <p className='text-sm'>Lorem, ipsum dolor sit amet</p>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>PRIVACY</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>SERVICES</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>ABOUT US</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>INFORMATION</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>SOCIAL MEDIA</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'

const Footer = () => {



    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <>
            <footer className="bg-violet-700 p-10">
                <div className="flex flex-wrap justify-between">
                    {/* Column 1 */}
                    <div className="flex-1 m-2 text-white">
                        <h5 className="font-bold text-2xl">Hoteluxe</h5>
                        <p>Learn more about our company and team.</p>
                    </div>
                    {/* Column 2 */}
                    <div className="flex-1 m-2 text-white">
                        <h5 className="font-bold text-2xl">Contact</h5>
                        <p>Email: contact@company.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    {/* Column 3 */}
                    <div className="flex-1 m-2 text-white">
                        <h5 className="font-bold text-2xl">Follow Us</h5>
                        <div className="space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook text-lg"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter text-lg"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                        </div>
                    </div>
                    {/* Column 4: Links Section */}
                    <div className="flex-1 m-2 text-white">
                        <h5 className="font-bold mx-4 text-2xl">Links</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About Us</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    {/* Column 5 */}
                    <div className="flex-1 m-2">
                        <form className="flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 w-3/4 mr-2 rounded border border-gray-300"
                            />
                            <button
                                type="submit"
                                className="bg-info p-2 text-white rounded"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                {/* Back to Top Button */}
                {isVisible && (
                    <div className="flex justify-end">
                        <button onClick={scrollToTop} className="px-6 py-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring focus:ring-red-300" aria-label="Scroll to top"><i class="fa-solid fa-chevron-up"></i></button>
                    </div>
                )}


                <hr className="w-11/12 mx-auto mt-6 border-gray-400" />
                {/* Footer Bottom */}
                <div className="text-white mt-5 text-center">
                    <p>© 2024 E Cart. All Rights Reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
import { Link, Outlet, Routes, Route } from "react-router-dom"

export default function About() {
    return (
        <>
            <nav className="p-20 hidden lg:flex lg:gap-x-12">
                <Link to="mission" className="text-sm/6 font-semibold text-gray-900">
                    Our Mission
                </Link>
                <Link to="our-team" className="text-sm/6 font-semibold text-gray-900">
                    Our Team
                </Link>
                <Link to="contact-us" className="text-sm/6 font-semibold text-gray-900">
                    Contact Us
                </Link>
            </nav>

            <Outlet />

            {/*<Routes>
                <Route path="/mission" element={<Mission />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes> */}
        </>
    )
}
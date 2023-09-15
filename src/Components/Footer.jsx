import React from 'react'
import useAuth from "../hooks/useAuth"
function Footer() {
  const { theme} = useAuth()
  return (
    <>
                                     {/* <!-- Footer --> */ }
                    <footer className={theme?"sticky-footer FooterTheme" : "sticky-footer bg-white"}>
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © BarberSupplies 2023</span>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End of Footer --> */}
    
    </>
  )
}

export default Footer
import React from 'react'
import "../styles/Header.scss"


export default function Footer() {
  return (
    <footer id="contacto">
        <div class="footerContenido">
            <div class="contactanos">
                <h1 class="brand">Polleria KikiriBrasa</h1>
                <p>En tu casa o en la nuestra no importa donde estés, siempre vamos a engreirte con el gran sabor que nos caracteriza. ¡Gracias por preferirnos..!</p>
            </div>
            <div class="footerSocial">
                <a href="https://www.facebook.com/kikiriBrasa" target="_blank" class="social-media-icon">
                    <i class='bx bxl-facebook'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-twitter'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-instagram'></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+975464565&text=Me%20interesa%20saber%20sobre%20Kikiri%20Brasa%20!!!" target="_blank" class="social-media-icon">
                    <i class='bx bxl-whatsapp'></i>
                </a>            
            </div>
        </div>    
        <div class="line"></div>
    </footer>    
  )
}
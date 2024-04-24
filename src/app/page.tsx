import Image from 'next/image'
import { Header } from './components/Header'
import HamgurgerLogo from './assets/hamburger-color.png'
import ShoppingCart from './assets/shoppingCart.svg'

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <a href="/">
          <Image
            src={HamgurgerLogo}
            width={24}
            height={24}
            alt='Burgerlivery Logo'/>
          Burgerlivery
        </a>
          <li><a href="/">Home</a></li>
          <li><a href="/">Cardápio</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Contato</a></li>
          <li><button>Cadastre-se</button></li>
          <li><a href="/">Login</a></li>
          <li>
            <a href="">
              <Image 
                src={ShoppingCart}
                width={24}
                height={24}
                alt='Shopping Cart Logo'/>
              </a>
          </li>
      </nav>
    </header>
    
    <main className='bg-bg'>


    </main>
    </>
  )
}

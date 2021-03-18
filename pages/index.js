import Header from "../components/Header"
import NavbarMenu from '../components/NavbarMenu'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Header status="true"/>
        <NavbarMenu/>
        <SearchBar />
    </div>
  )
}

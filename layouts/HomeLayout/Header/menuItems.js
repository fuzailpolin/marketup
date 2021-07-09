import Link from "next/link";

const SubNavItems = () => (
    <>
        <li>
            <Link href={'/'}>Home</Link>
        </li>

        <li>
            <Link href={'#about'}>About</Link>
        </li>

        <li>
            <a href={'#service'}>Service</a>
        </li>


        <li>
            <Link href={'#team'}>Our Team</Link>
        </li>

        <li>
            <Link href={'#work'}>Work</Link>
        </li>

        <li>
            <Link href={'#client'}>Client</Link>
        </li>



        <li>
            <Link href={'#contact'}>Contact</Link>
        </li>

    </>
)

export default SubNavItems

import TileGroup from './TileGroup'
import ImageSet from '../../ui/tiles/ImageSet'
import IconRect from '../../ui/tiles/IconRect'
import Information from '../../ui/tiles/Information'

export default function AboutTiles() {
    return (
        <TileGroup head="Contact Me" className="about-me">
            <ImageSet
                type="wide"
                imageSet={[
                    {
                        id: '2sdsd',
                        url: 'https://static.wikia.nocookie.net/386fb1d4-61e3-4be6-a6a2-05ba11177b76',
                        description: 'Pichu',
                    },
                    {
                        id: 'sddd',
                        url: 'https://static.wikia.nocookie.net/f42e409a-ea17-44cb-ad84-816b51e96334',
                        description: 'Bulbasaur',
                    },
                    {
                        id: 'etrg',
                        url: 'https://static.wikia.nocookie.net/c7c39e03-6feb-4c66-bba4-09783b7e5bc3',
                        description: 'Pikachu',
                    },
                ]}
                className="about-me-image-set"
            />
            <Information
                type="wide"
                icon="FullStack"
                bgColor="#00ADD0"
                info={[
                    ['mark-0', 'mark', 'Full Stack Developer'],
                    ['br-0', 'br', null],
                    ['p-1', 'p', 'Typescript | React.js | Node.js |  Jest'],
                    ['p-2', 'p', 'Amazon Web Services'],
                ]}
                className="about-me-info"
            />
            <IconRect
                type="badge"
                icon="Linkedin"
                label="Linkedin"
                bgColor="#0077b5"
                className="about-me-linkedin"
                href="https://www.linkedin.com/in/urs-byron/"
            />
            <IconRect
                type="badge"
                icon="Google"
                label="Google"
                bgColor="#34a853"
                className="about-me-google"
                href="https://mail.google.com/mail/u/0/?to=bmlursua@gmail.com&su=Career Opportunity&fs=1&tf=cm"
            />
            <IconRect
                type="badge"
                icon="Viber"
                label="Viber"
                bgColor="#7360f2"
                className="about-me-viber"
                href="viber://chat?number=09194982789"
            />
            <IconRect
                type="badge"
                icon="Mail"
                label="Outlook"
                bgColor="#50d9ff"
                className="about-me-mail"
                href="mailto:bmlursua@gmail.com"
            />
        </TileGroup>
    )
}

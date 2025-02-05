import TileGroup from './TileGroup'

import NewsSet from '../../ui/tiles/NewsSet'
import Information from '../../ui/tiles/Information'
import ImageSet from '../../ui/tiles/ImageSet'
import IconRect from '../../ui/tiles/IconRect'

export default function ProjectTiles() {
    return (
        <TileGroup head="Projects" className="projects">
            <IconRect
                type="full"
                icon="NXT"
                label="NXT"
                bgColor="#013763"
                className="tech-stack-nxt"
                href="https://www.nxt.com.ph/"
            />
            <NewsSet
                type="wide"
                newsSet={[
                    {
                        id: 'NXT-1',
                        src: 'https://www.nxt.com.ph/pricing',
                        figureImgSrc: 'https://i.ibb.co/JjMcL7qd/NXT3.jpg',
                        icon: 'NXT',
                        title: 'NXT Live',
                        description: 'Subscription Pricing',
                    },
                    {
                        id: 'NXT-2',
                        src: 'https://www.nxt.com.ph/',
                        figureImgSrc: 'https://i.ibb.co/JRZ5BC42/NXT2.jpg',

                        icon: 'NXT',
                        title: 'NXT Live',
                        description: 'Job Search',
                    },
                    {
                        id: 'NXT-3',
                        src: 'https://www.nxt.com.ph/faq',
                        figureImgSrc: 'https://i.ibb.co/zWTvm266/NXT1.jpg',

                        icon: 'NXT',
                        title: 'NXT Live',
                        description: 'FAQs',
                    },
                ]}
                bgColor="#013763"
                className="project-nxt-news-set"
            />
            <Information
                type="wide"
                icon="NXT"
                bgColor="#9E1716"
                info={[
                    [
                        'be-2023-1',
                        'p',
                        'Designed a user management feature for handling concurrent applicant operations.',
                    ],
                    ['br-0', 'br', null],
                    [
                        'be-2023-2',
                        'p',
                        'Developed a subscription system for efficiently servicing 100+ subscriptors, handling and recording orders, transactions, plans, and expirations.',
                    ],
                    ['br-1', 'br', null],
                    [
                        'be-2023-3',
                        'p',
                        'Led the development of secure proxy servers for third party vendors resources',
                    ],
                ]}
                className="project-nxt-info"
            />
            <IconRect
                type="badge"
                icon="AWS"
                label="AWS"
                bgColor="#252f3e"
                className="project-nxt-aws"
            />
            <IconRect
                type="badge"
                icon="React"
                label="React.js"
                bgColor="#61dafb"
                className="project-nxt-react"
            />
            <IconRect
                type="badge"
                icon="Node"
                label="Node.js"
                bgColor="#83cd29"
                className="project-nxt-node"
            />
            <IconRect
                type="badge"
                icon="PostgresSQL"
                label="PostgresSQL"
                bgColor="#336791"
                className="project-nxt-postgresql"
            />
            <IconRect
                type="full"
                icon="HCP"
                label="HCP"
                bgColor="#3A0CA3"
                className="project-hcp-iconrect"
            />
            <ImageSet
                type="wide"
                imageSet={[
                    {
                        id: 'HCP1',
                        url: 'https://i.ibb.co/Q7SSWYM4/LoginP.jpg',
                        description: 'Login Page',
                    },
                ]}
                bgSize="cover"
                className="project-hcp-image-set"
            />
            <Information
                type="wide"
                icon="HCP"
                bgColor="#B81B6C"
                info={[
                    [
                        'be-2023-1',
                        'p',
                        'Planned and implemented user authentication and authorization using AWS Cognito and Google OAuth APIs, along with related security protocols.',
                    ],
                ]}
                className="project-hcp-info"
            />
        </TileGroup>
    )
}

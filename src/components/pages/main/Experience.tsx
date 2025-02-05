import TileGroup from './TileGroup'
import NewsSet from '../../ui/tiles/NewsSet'
import Information from '../../ui/tiles/Information'

export default function ExperienceTiles() {
    return (
        <TileGroup head="Experience" className="exp">
            <Information
                type="wide"
                icon="Acquiro"
                bgColor="black"
                className="exp-info-2023"
                info={[
                    ['1', 'mark', 'Backend Developer'],
                    ['2', 'br', null],
                    ['3', 'p', '2023 - NOW @ Acquiro Sol. & Tech'],
                ]}
            />
            {/* <IconRect
                        type="full"
                        icon="Acquiro"
                        label="Acquiro"
                        bgColor="#06b4ff"
                        className="exp-2023"
                    /> */}
            <Information
                type="wide"
                icon="Acquiro"
                bgColor="#8545fc"
                info={[
                    [
                        'be-2023-1',
                        'p',
                        'Developed performant Node.js servers using clean and Domain Driven Design.',
                    ],
                    ['br-0', 'br', null],
                    [
                        'be-2023-2',
                        'p',
                        'Designed robust data models and secure querying and storing operations for reliant database use with PostgreSQL and DynamoDB/ElectroDB.',
                    ],
                    ['br-1', 'br', null],
                    [
                        'be-2023-3',
                        'p',
                        'Created dynamic and reusable React, Redux, and Sass client-side components.',
                    ],
                    ['br-2', 'br', null],
                    [
                        'be-2023-4',
                        'p',
                        'Led client-side API handling for various front-end applications with Tanstack Query.',
                    ],
                    ['br-3', 'br', null],
                    [
                        'be-2023-5',
                        'p',
                        'Mentored new software developers, providing guidance on best practices, code reviews, and project workflows, resulting in faster and improved team productivity.',
                    ],
                ]}
                className="exp-info"
            />
            <NewsSet
                type="wide"
                newsSet={[
                    {
                        id: 'Asticom Strive Awards',
                        src: 'https://www.facebook.com/share/v/15gGbiraw2/',
                        figureImgSrc:
                            'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/448671802_10226024441018963_6491267303883679482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdkvgQTKl3NaoA5J5yk6xs84QWeHLQFQjzhBZ4ctAVCH9PyHfyQQeFt9nSSnewAuqqrTtNBueOjDafWt6H3T-f&_nc_ohc=nWCtWGWginYQ7kNvgF8LYAL&_nc_oc=AdiDe1kLCxcJ9g7ON6rYyMmz37WDMiUPlNjGpGZHcY1uePXqXXYXcNp5Hq7os0qj_u8&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=AcbioTCEpOr6ycgrZYyyUjq&oh=00_AYCQ4j90BDkone1scmJSw69y20JIYA3fFlr12z4ubK2_nw&oe=67A632A0',
                        icon: 'Facebook',
                        title: 'Asticom Strive Awards 2024',
                        description: 'NXT as Innovation of the Year',
                    },
                ]}
                bgColor="#1877f2"
                className="exp-news-set"
            />
        </TileGroup>
    )
}

import './styles.css'
import 'react-vertical-timeline-component/style.min.css'

//import useScrollPosition from '@react-hook/window-scroll'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
export default function Timelinetest() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'transparent', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="vertical-timeline-element-content-box">
          <h3 className="vertical-timeline-element-title">Phase 1 </h3>
          <p>
            {' '}
            Token Stealth Launch, Website Reveal, Social Media Presence, Paid Marketing, 500 Holders, Preview of Limited
            NFT Collection, Initiate Smart Contract Audit, Exclusive 1% Club Reveal, Release of Limited NFT Collection
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentStyle={{ background: 'transparent', color: '#fff' }}
      >
        <div className="vertical-timeline-element-content-box">
          <h3 className="vertical-timeline-element-title">Phase: 2</h3>
          <p>
            {' '}
            1000 Holders CG/CMC Listing + Others, Aggresive Marketing Campaign, Exchange Listing, Hidden Utility use
            case, WhitePaper Release
          </p>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: 'transparent',
          color: 'linear-gradient(50deg, rgb(128, 4, 124), rgb(227, 2, 195), rgb(230, 117, 227)) 1',
        }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="vertical-timeline-element-content-box">
          <h3 className="vertical-timeline-element-title">Phase 3</h3>
          <p> 5,000 Holders, Partnerships, Cross-Chain Game Development, Metaverse Development</p>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          backgroundColor: 'transparent',
        }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="vertical-timeline-element-content-box">
          <h3 className="vertical-timeline-element-title">Phase 4</h3>
          <p>10,000+ Holders, Animeverse Game Preview, Animeverse Game Release, Metaverse Integration</p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement iconStyle={{ backgroundColor: 'transparent', color: '#fff' }} />
    </VerticalTimeline>
  )
}

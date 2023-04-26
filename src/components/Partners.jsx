import audiophile from "../assets/images/client-audiophile.svg"
import databiz from "../assets/images/client-databiz.svg"
import maker from "../assets/images/client-maker.svg"
import meet from "../assets/images/client-meet.svg"

export const Partners = () => {
  return (
    <ul className='partners'>
      <li>
        <img
          src={audiophile}
          alt='audiophile-logo'
        />
      </li>
      <li>
        <img
          src={databiz}
          alt='databiz-logo'
        />
      </li>
      <li>
        <img
          src={maker}
          alt='maker-logo'
        />
      </li>
      <li>
        <img
          src={meet}
          alt='meet-logo'
        />
      </li>
    </ul>
  )
}

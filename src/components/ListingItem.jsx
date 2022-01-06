import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as DeletIcon } from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/badgeIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ listing, id, onDelete }) {
  const {
    bathrooms,
    bedrooms,
    discountedPrice,
    imageUrls,
    location,
    name,
    offer,
    regularPrice,
    type,
  } = listing
  return (
    <li className='categoryListing'>
      <Link to={`/category/${type}/${id}`} className='categoryListingLink'>
        <img src={imageUrls[0]} alt={name} className='categoryListingImg' />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{location}</p>
          <p className='categoryListingName'>{name}</p>
          <p className='categoryListingPrice'>
            $
            {offer
              ? discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {type === 'rent' && ' / Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {bedrooms > 1 ? `${bedrooms} Bedrooms` : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt='bath' />
            <p className='categoryListingInfoText'>
              {bathrooms > 1 ? `${bathrooms} Bathrooms` : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <DeletIcon
          className='removeIcon'
          fill='rgb(231, 76, 60)'
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  )
}

ListingItem.propTypes = {
  listing: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}

export default ListingItem

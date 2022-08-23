import React from 'react';
import PropTypes from 'prop-types';
import { CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

const CardActionsContainer = (props) => {
  const { bee } = props;
  const url = `https://beebookcapstone.netlify.app/${bee.id}`;

  return (
    <CardActions className="social-icons-container">
      <FacebookShareButton
        url={url}
        hashtag="#beeTeam"
        className="social-button"
      >
        <div className="social-button">
          <FacebookRoundedIcon
            size="large"
            color="inherit"
          />
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
      >
        <div className="social-button">
          <TwitterIcon size="large" color="inherit" />
        </div>
      </TwitterShareButton>
      <WhatsappShareButton
        url={url}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
        separator=" "
      >
        <div className="social-button">
          <WhatsAppIcon size="large" color="inherit" />
        </div>
      </WhatsappShareButton>
    </CardActions>
  );
};

CardActionsContainer.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardActionsContainer;

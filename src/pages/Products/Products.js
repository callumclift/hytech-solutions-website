import React from 'react';
import { Button } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import standardLogo from '../../images/standardLogo.png'
import proLogo from '../../images/proLogo.png'
import hytechGasImage from '../../images/hytechGasImage.png'



import {
  ProductsSection,
  ProductsWrapper,
  ProductsContainer,
  ProductsCard,
  ProductsCardInfo,
  ProductsCardCost,
  ProductsCardLength,
  ProductsCardFeatures,
  ProductsCardFeature,
  Subtitle,
  ProductLogo
} from './Products.elements';

const useStyles = makeStyles({
  imageTable: {
    width: '100%',
    height: 'auto',
    maxWidth: '150px',
    minWidth: '100px',
},
});

function Products() {
  const classes = useStyles();
  return (
    <>
      <ProductsSection>
        <ProductsWrapper>
          <ProductLogo src={hytechGasImage} alt="HytechGas"/>
          <br/>
          <Subtitle lightTextDesc={true}>{'Choose a plan to suit you - prices from as low as 30p per day and your first month completely free.'}</Subtitle>
          <ProductsContainer>
            <ProductsCard to='/contact-us'>
              <ProductsCardInfo>
                <img src={standardLogo} className={classes.imageTable} alt="HytechSolutionsStandard"/>
                <ProductsCardCost>£8.99</ProductsCardCost>
                <ProductsCardLength>per month</ProductsCardLength>
                <ProductsCardFeatures>
                  <ProductsCardFeature>First month free</ProductsCardFeature>
                  <ProductsCardFeature>Unlimited Job Sheets</ProductsCardFeature>
                  <ProductsCardFeature>Unlimited forms and service checklists</ProductsCardFeature>
                  <ProductsCardFeature>Unlimited quotes</ProductsCardFeature>
                  <ProductsCardFeature>Calendar access to view, create, edit and complete jobs</ProductsCardFeature>
                  <ProductsCardFeature>Jobs map to keep track of jobs and provide directions</ProductsCardFeature>
                  <ProductsCardFeature>Engineer map to locate colleagues</ProductsCardFeature>
                  <ProductsCardFeature>Online/Offline functionality</ProductsCardFeature>
                  <ProductsCardFeature>Share forms via email, AirDrop, whatsapp and more</ProductsCardFeature>
                  <ProductsCardFeature>Auto-completed Engineer Details on forms</ProductsCardFeature>
                  <ProductsCardFeature>Jobs database for previous jobs</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button>Get In Touch</Button>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to='/contact-us'>
              <ProductsCardInfo>
              <img src={proLogo} className={classes.imageTable} alt="HytechSolutionsStandard"/>
                <ProductsCardCost>£11.99</ProductsCardCost>
                <ProductsCardLength>per month</ProductsCardLength>
                <ProductsCardFeatures>
                <ProductsCardFeature>First month free</ProductsCardFeature>
                  <ProductsCardFeature>All features from standard</ProductsCardFeature>
                  <ProductsCardFeature>Access to jobs database across entire company</ProductsCardFeature>
                  <ProductsCardFeature>Auto-completed customer details on forms</ProductsCardFeature>
                  <ProductsCardFeature>Company-wide job management</ProductsCardFeature>
                  <ProductsCardFeature>Customer management</ProductsCardFeature>
                  <ProductsCardFeature>Quick job creation for customers with smart auto-complete</ProductsCardFeature>
                  <ProductsCardFeature>Engineer management</ProductsCardFeature>
                  <ProductsCardFeature>Unlimited invoices</ProductsCardFeature>
                  <ProductsCardFeature>Invoice database for previously raised invoices across company</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button>Get In Touch</Button>
              </ProductsCardInfo>
            </ProductsCard>
          </ProductsContainer>
        </ProductsWrapper>
      </ProductsSection>
    </>
  );
}

export default Products;

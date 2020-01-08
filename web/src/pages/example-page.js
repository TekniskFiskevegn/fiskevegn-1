// import React from "react";
// import { graphql } from "gatsby";
// import SEO from "../components/seo";
// import Layout from "../containers/layout";
// import Container from "../components/container";
// import Block from "../components/block";
// import InnerContainer from "../components/inner-container";
// import FrontpageImage from "../components/frontpage-image";
// import PromotedBlock from "../components/promoted-block";
// import GraphQLErrorList from "../components/graphql-error-list";
// import { demoText } from "../lib/demoContent";

// const ExamplePage = props => {
//   const { data, errors } = props;

//   return (
//     <Layout isCustomHeader={true}>
//       <SEO />
//       <Container>
//         <h1 hidden>{site.title}</h1>
//         {foo && (
//           <Block name="products">
//             <InnerContainer>
//               <Promoted {...products} intro={{ name: "foo", title: "bar" }} />
//             </InnerContainer>
//           </Block>
//         )}
//         {bar && (
//           <Block name="services" verticalRhythm={{ top: 0, bottom: 0, isMargin: true }}>
//             <BlockDesign svgDesign={true} designType="wave" designSelection="1">
//               <InnerContainer verticalRhythm={{ top: 0, bottom: 0, isMargin: true }}>
//                 <Promoted {...services} />
//               </InnerContainer>
//             </BlockDesign>
//           </Block>
//         )}
//       </Container>
//     </Layout>
//   );
// };

// export default ExamplePage;

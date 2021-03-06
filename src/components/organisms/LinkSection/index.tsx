import React from "react";
import styled from "styled-components";

import FontAwesome from "../../atoms/FontAwesome";
import { Grid, Row } from "../../atoms/GridLayout";
import { Heading2 } from "../../atoms/Headings";
import BrandLinkGroup from "../../molecules/BrandLinkGroup";
import NormalLinkGroup from "../../molecules/NormalLinkGroup";

import { ExtractProps } from "../../../type-helper";

type Props = {
  className?: string;
  links: (ExtractProps<typeof BrandLinkGroup> & { prefix: ExtractProps<typeof FontAwesome>["prefix"] })[];
};

const LinkGroup = styled.div`
  margin-bottom: 16px;
`;

const Heading = styled(Heading2)`
  color: #333;
`;

const LinkSection: React.FC<Props> = ({ className, links }) => {
  return (
    <section className={className}>
      <Heading>Links</Heading>
      <Grid rows={6}>
        {links.map(w => (
          <Row key={`${w.icon}-${w.label}`} sm={3} md={2}>
            <LinkGroup>
              {w.prefix === "brands" ? (
                <BrandLinkGroup account={w.account} label={w.label} href={w.href} icon={w.icon} />
              ) : (
                <NormalLinkGroup account={w.account} label={w.label} href={w.href} icon={w.icon} />
              )}
            </LinkGroup>
          </Row>
        ))}
      </Grid>
    </section>
  );
};

export default LinkSection;

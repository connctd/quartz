import React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Themeable, defaultTheme } from '../theme';

interface AnchorProps extends Themeable {
  href?: string;
  children?: React.ReactNode;
  primary?: boolean;
  target?: string;
  component?: any;
  extraProps?: any;
}

const StyledAnchor = styled('a', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'primary'
}) <AnchorProps>`
  color: ${(props) => (props.primary ? props.theme.success : props.theme.gray1)};
  text-decoration: underline;
`;

export const Anchor: React.FC<AnchorProps> = React.memo(({
  children,
  primary,
  theme = defaultTheme,
  href,
  component = 'a',
  style,
  extraProps
}) => (
  <StyledAnchor
    as={component}
    primary={primary}
    theme={theme}
    href={href}
    style={style}
    {...extraProps}
  >
    {children}
  </StyledAnchor>
));

export default Anchor;

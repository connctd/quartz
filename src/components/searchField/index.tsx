/* eslint-disable no-underscore-dangle */
import React, {
  useEffect, useRef, useState
} from 'react';
import styled from '@emotion/styled';
import { MdiReactIconComponentType } from 'mdi-react';

import { defaultTheme, Themeable } from '../theme';
import Input from '../input';

interface SearchFieldProps extends Themeable {
  value: string;
  options: string[];
  initExpanded?: boolean;
  placeholder?: string;
  prefix?: string;
  autoFocus?: boolean;
  maxHeight?: number;
  icon?: MdiReactIconComponentType;
  onClickIcon?: () => void;
  onChangeValue?: (value: string) => void;
}

const Container = styled.div<{ maxHeight?: number }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight}px` : '')}
`;

const InputContainer = styled.div`
  z-index: 10;
`;

const OptionList = styled.div<Themeable>`
  flex-shrink: 1;
  margin-top: -2px;
  border: solid 1px ${({ theme }) => theme.gray3};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow-y: auto;
  z-index: 5;
`;

const OptionItem = styled((props) => <div {...props} />) <Themeable & { active: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  background-color: ${({ active, theme }) => (active ? theme.gray5 : theme.white)};
  border-bottom: solid 1px ${({ theme }) => theme.gray4};
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray5};
  }
`;

const SearchField: React.FC<SearchFieldProps> = ({
  options,
  initExpanded,
  placeholder,
  prefix,
  autoFocus,
  maxHeight,
  icon,
  onClickIcon,
  onChangeValue,
  theme = defaultTheme
}) => {
  const [value, setValue] = useState('');
  const [focusIndex, setFocusIndex] = useState(-1);
  const [hiddenOptions, setHiddenOptions] = useState(false);

  const optionListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<any>(null);

  const renderOption = (label: string, index: number) => (
    <div
      key={label}
      ref={(el) => { if (el) optionItemsRef.current[index] = el; }}
    >
      <OptionItem
        active={index === focusIndex ? 1 : 0}
        theme={theme}
        onClick={() => selectOption(index)}
      >
        {label}
      </OptionItem>
    </div>
  );

  let filteredOptions;
  let optionElements;

  if (!value) {
    filteredOptions = options;

    if (initExpanded) {
      optionElements = options.map(renderOption);
    }
  } else {
    const searchRegex = new RegExp(value, 'gi');
    filteredOptions = options.filter((option) => option.match(searchRegex));
    optionElements = filteredOptions.map(renderOption);
  }

  const optionItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const selectedOptionRef = optionItemsRef.current[focusIndex];
    selectedOptionRef?.scrollIntoView(false);
  }, [focusIndex]);

  let optionListElement;

  if (!hiddenOptions) {
    optionListElement = (
      <OptionList ref={optionListRef} theme={theme}>
        {optionElements}
      </OptionList>
    );
  }

  const increaseFocusIndex = () => setFocusIndex(focusIndex === filteredOptions.length - 1 ? 0 : (focusIndex + 1));
  const decreaseFocusIndex = () => setFocusIndex(focusIndex === 0 ? filteredOptions.length - 1 : (focusIndex - 1));
  const resetFocusIndex = () => setFocusIndex(-1);

  const selectOption = (index?: number) => {
    const selectedValue = index === 0 ? filteredOptions[0] : filteredOptions[index || focusIndex];

    setValue(selectedValue);
    resetFocusIndex();
    setHiddenOptions(true);

    if (onChangeValue) onChangeValue(selectedValue);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    if (onChangeValue) onChangeValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    switch (key) {
      case 'ArrowDown':
        increaseFocusIndex();
        break;
      case 'ArrowUp':
        decreaseFocusIndex();
        break;
      case 'Escape':
        resetFocusIndex();
        break;
      case 'Enter':
        selectOption();
        break;
      default:
        resetFocusIndex();
        setHiddenOptions(false);
        break;
    }
  };

  return (
    <Container maxHeight={maxHeight}>
      <InputContainer>
        <Input
          id="tobiInput"
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          prefix={prefix}
          autoFocus={autoFocus}
          icon={icon}
          onClickIcon={onClickIcon}
          autoComplete="off"
        />
      </InputContainer>
      {optionListElement}
    </Container>
  );
};

export default SearchField;

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
  hasError?: boolean;
  error?: string;
  icon?: MdiReactIconComponentType;
  onClickIcon?: () => void;
  onChangeValue?: (value: string) => void;
}

interface OptionsListPosition {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
}

const Container = styled.div<{ maxHeight?: number }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight}px` : '')}
`;

const OptionList = styled.div<Themeable & OptionsListPosition>`
  position: absolute;
  flex-shrink: 1;
  margin-top: -2px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  max-height: ${({ maxHeight }) => maxHeight}px;
  background-color: ${({ theme }) => theme.white};
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
  hasError,
  error,
  icon,
  onClickIcon,
  onChangeValue,
  theme = defaultTheme,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [focusIndex, setFocusIndex] = useState(-1);
  const [hiddenOptions, setHiddenOptions] = useState(false);
  const [optionsListPosition, setOptionsListPosition] = useState<OptionsListPosition>({
    top: 0,
    left: 0,
    width: 0,
    maxHeight: 0
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const optionItemsRef = useRef<HTMLDivElement[]>([]);

  const updateOptionListPosition = (inputElement: HTMLInputElement | null) => {
    if (inputElement) {
      setOptionsListPosition({
        top: inputElement.offsetTop + inputElement.offsetHeight,
        left: inputElement.offsetLeft,
        width: inputElement.offsetWidth,
        maxHeight: maxHeight || (window.innerHeight - (inputElement.offsetTop + inputElement.offsetHeight))
      });
    }
  };

  useEffect(() => {
    updateOptionListPosition(inputRef.current);

    window.addEventListener('resize', () => {
      updateOptionListPosition(inputRef.current);
    });
  }, [inputRef]);

  useEffect(() => {
    const selectedOptionRef = optionItemsRef.current[focusIndex];
    selectedOptionRef?.scrollIntoView(false);
  }, [focusIndex]);

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

  let optionListElement;

  if (!hiddenOptions) {
    optionListElement = (
      <OptionList
        ref={optionListRef}
        theme={theme}
        top={optionsListPosition.top}
        left={optionsListPosition.left}
        width={optionsListPosition.width}
        maxHeight={optionsListPosition.maxHeight}
      >
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
    <Container>
      <Input
        {...rest}
        id="tobiInput"
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        prefix={prefix}
        autoFocus={autoFocus}
        hasError={hasError}
        error={error}
        icon={icon}
        onClickIcon={onClickIcon}
        autoComplete="off"
        style={{ zIndex: 10 }}
      />
      {optionListElement}
    </Container>
  );
};

export default SearchField;
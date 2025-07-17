import { ApplyNumbersOnlyDirective } from './apply-numbers-only.directive';

describe('ApplyNumbersOnlyDirective', () => {
  let applyNumbersOnlyDirective: ApplyNumbersOnlyDirective;

  beforeEach(() => {
    applyNumbersOnlyDirective = new ApplyNumbersOnlyDirective();
  })

  describe('onKeyPress', () => {
    it('should allow key digits [0-9]', () => {
      const mockEvent = {
        key: '4',
        preventDefault: jest.fn()
      } as unknown as KeyboardEvent

      applyNumbersOnlyDirective.onKeyPress(mockEvent);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled()
    });

    it('should block non digit keys', () => {
      const mockEvent = {
        key: 'a',
        preventDefault: jest.fn()
      } as unknown as KeyboardEvent;

      applyNumbersOnlyDirective.onKeyPress(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

  });

  describe('onPaste', () => {
    it('should allow key digits [0-9]', () => {
      const mockEvent = {
        clipboardData: {
          getData: () => '12345'
        },
        preventDefault: jest.fn()
      } as unknown as ClipboardEvent;

      applyNumbersOnlyDirective.onPaste(mockEvent);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
    it('should block non digit keys', () => {
      const mockEvent = {
        text: 'as3433ndnd',
        preventDefault: jest.fn()
      } as unknown as ClipboardEvent;

      applyNumbersOnlyDirective.onPaste(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();

    })
  });



});

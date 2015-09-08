(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#popups', {
    // This will run before each test in this module.
    setup: function() {
      this.elem = $('#window');
      this
    }
  });

  test('实现弹窗', function() {
    expect(2);
    strictEqual(this.elem.popups('openPopups'), undefined, '弹出弹窗');
    strictEqual(this.elem.popups('closePopups'), undefined, '关闭弹窗');
  });

  // $('#close').click(function(event){
  //   test('关闭弹窗', function() {
  //     expect(1);
  //     // strictEqual(this.elem.popups('openPopups'), undefined, '弹出弹窗');
  //     strictEqual(this.elem.popups('closePopups'), undefined, '关闭弹窗');
  //   });
  // });

}(jQuery));

import Foundation

@objc public class Callkit: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

---
layout: post
title: Generic array shuffling in Swift 4.1
---

### The need

I'm working with an open API which is quite straightforward, GET a list of dog breeds, GET a list of image URLs for a specific dog breed, but what I need is to make a UITableView filled with pictures of multiple breeds I select; so, I'm thinking, OK, I'll get the URLs for each breed, merge them in a single array and shuffle it.

It doesn't happen every day that you need to shuffle an array. But when you do, you want to do it the most optimal way possible. So, googling ["array shuffle algorithms"](https://www.google.co.ve/search?q=array+shuffle+algorithms) the first result and the most talked about algorithm you get is the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

### The initial implementation

The first thing I came up with was:

{% highlight swift %}

func shuffleArray(_ arr: [String]) -> [String] {
    let maxIndex = arr.count - 1
    var auxArr = arr

    for i in 0...maxIndex {
        auxArr.swapAt(i, Int(arc4random_uniform(UInt32(maxIndex + 1))))
    }
    return auxArr
}

{% endhighlight %}


...but the problem with that particular implementation was:

1. `arr` is a constant in the scope of the function, so I had to create an "auxiliary" `var` in which to copy the array, modify it and return it. So, I ended up with double the memory space.
2. `arr` is of type `[String]`, which is not wrong for the need of the function, but if I needed to shuffle an array of Integers or any other type I'd have to declare another function with that type.

### The improved implementation. A.K.A: Generics to the rescue

{% highlight swift %}

func shuffleArray<T>(_ arr: inout Array<T>) -> Void {
    let maxIndex = arr.count - 1

    for i in 0...maxIndex {
        arr.swapAt(i, Int(arc4random_uniform(UInt32(maxIndex + 1))))
    }
}

{% endhighlight %}

1. Adding `inout` to the `arr` parameter type gets rid of the need for an auxiliary array, modifying the original array without even having to return the shuffled array to reasign.
2. Making the function generic type `Array<T>`, makes the function work with different array types.

### That's it

That's my implementation of the Fisher-Yates shuffling for Swift 4.1.

-- Eduard

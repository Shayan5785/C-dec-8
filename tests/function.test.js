const { combineWords, getLetter, buildEvenRange } = require('../src/function')

test('should combine two words', () => { 
    expect( combineWords( "hello","world" )).toBe( "hello world" )
    expect( combineWords( "red","planet" )).toBe( "red planet" )
 })

test('should tell the postion of character in letter or null', () => { 
    expect(getLetter( 'Strange',1 )).toBe( "S" )
    expect(getLetter( 'nice',4 )).toBe( "e" )
    expect(getLetter( 'purple',7 )).toBe( null )
    expect(getLetter( 'JavaScript',0 )).toBe( null )
 })

test('should check array contain even number', () => { 
    expect( buildEvenRange( 2,6 )).toEqual( [2,4,6] )
    expect( buildEvenRange( 12,17 )).toEqual( [12,14,16] )
    expect( buildEvenRange( 3,7 )).toEqual( [4,6] )
    expect( buildEvenRange( 10,9 )).toEqual( [] )
 })


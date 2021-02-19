
import Temperature from "./Temperature"

it("renders correctly",() => {
 const wrapper = shallow(
   <Temperature temp={10} city='Toronto' toggleForecast={() => {}} />
 )

expect(wrapper).toMatchSnapshot()
})
it("renders correctly again",() => {
  // render return the actual html
 const wrapper = render(
   <Temperature temp={10} city='Toronto' toggleForecast={() => {}} />
 )

expect(wrapper).toMatchSnapshot()
})

it('formats the temp correctly', () => {
  const wrapper = mount(<Temperature temp={10} city='Toronto' toggleForecast={() => {}} />)

  const text = wrapper.find("LargeText").text();
  console.log(text)
  expect(text).toEqual("10°c")
});

it('calls toggleForecast on Click', () => {
  const spy = sinon.spy();
  const wrapper = mount(<Temperature temp={10} city='Toronto' toggleForecast={spy} />)
  
  wrapper.find('div').first().simulate("click")

  expect(spy.calledOnce).toBe(true)
});
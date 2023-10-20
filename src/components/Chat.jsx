import React, { useCallback, useContext } from 'react'
import  Messages  from './Messages'
import  Input  from './Input'
import { ChatContext } from '../context/ChatContext'
export const Chat = () => {
  const {data}=useContext(ChatContext);
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user.displayName}</span>
             <div className="chatIcons">
            <img src="data:image/png;base64,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" alt=""/>
            <img src="data:image/png;base64,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" alt=""/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACGhoaNjY38/Pzl5eWcnJzs7Ozy8vK8vLzLy8tvb2/f3991dXVKSkoyMjLX19eTk5NCQkKmpqZcXFw7Ozt8fHyCgoLR0dFHR0fY2NiZmZnHx8f39/ccHBysrKwWFhYODg60tLQnJydUVFRoaGg9PT0gICDKKIhyAAADkklEQVR4nO3b63qiMBCAYeIJ8HysrXZV7On+73ChtFsokkxG92nF7/0/8wwhhgnEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAVCaf7WSs1W/TDzoVyRt24105ztntxN7pQzk7YX+SF7qehPKq/fjAFq0F8fkHD3vJQyHlY9oZn54ziwaRY6MO6L7kb4ezNVCSD+7NqiR+qOc38eFbOzSip5nxru+5kODhRSj5A+mtc1OU0C3XO+1Nj9m5gu8ZOr7YWV6illokl56SvyhmNbIVua+fqcGWLSymmVefOkfNOsZDFjpyrzem4oyMuK8e3lq5r0NLb2PVNunYXuj8V13bHGTP2G/GpJKeZ+l3gWJKzXY1zzaYP8z8etTzKcppHj5x/apeYssp0awmLMWN5MbI7mPG4i8/SnK1ynHURLVtKa+nKcxrxb3Epz9krxvU9ijEzYTG2p8R3E+Hve+tTaOFJFO18Ao3s2S/8YX+QrdL3Xjl3X82m9flZNZEU4zUtTGnA6/lMi9RINzKp7eWLEQ2b1xzNfM4291P5O3f/Vt+L1jn5kC4JvXO+5oHSp1aBe7Hxz5k4c4p6krJ87oufMAWupU/QAVa4ut6OIudzFjhUBDqn1FyRc+7IudcUmu2zZ5pARzWqUTOOXb9m1N5/T6pAx1rj0SIV2PfD/utMJr0VkSrQxNZqPHqrAns/6NoU1oi0gSNbMdHBneCEg/WFl2db8ilWTij7FsOn5y6y9t+ibWFVL3jRBT7Zxls5L6xTP3rS5XxRNDQ523gr50V5v3OhebEK/LYVX2xLu6L5eHfi1cM/ugdQusEIEmWk7QrFLwy+aVlyaq8wUTSQuWu5QhMkysBrucLkBn6HzV9Lm/88bH5Poxxv67sxZV+6+z99afP3Fs3fH97AHr/572ma/65N877U1nzkFNU4cypapY8vk41/530D3y1+xbcn0Sc77bcn3x7kWr4fvhV6JK/FRjJHUx2fAV/Jcvo9vEufJBv/Hf8GzmLcwHka6Zkoj1qCX3YmStRprf1q+blzbTUd4PDVEWffFOrK8T4MGAjOJtbuUhp/vjQV1oaOPX8tBfukLqm7F60zrV1TnTciOn3OW399mV90zjvT6bdKy9VlzuovlsV3z7vl4iJn9UsL2bglOqufCzfHbfuK/m/R3h43umUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+Qv7iQ69Hax560AAAAASUVORK5CYII=" alt=""/> {/**/}
            </div>
            
        </div><Messages/><Input/>
    </div>
  )
}
export default Chat;
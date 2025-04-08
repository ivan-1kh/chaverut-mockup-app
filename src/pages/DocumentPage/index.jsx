import React from 'react';

function DocumentPage() {

    const containerStyle = {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '5px',
        fontFamily: 'serif',
        lineHeight: '1.6',
      };
      
      const indentedSectionStyle = {
        marginLeft: '15px',
      };
      

    return (
        <div style={containerStyle}>
        <p>
          Here are the primary Torah passages that discuss the laws of Shabbat, quoted word-for-word from the Torah (in English translation):
        </p>
        <div style={indentedSectionStyle}>
          <p>
            <strong>Exodus 20:8-11 (The Fourth Commandment)</strong><br />
            “Remember the Sabbath day to sanctify it. Six days you may work and perform all your labor, but the seventh day is a Sabbath to the Lord your God; you shall not perform any labor—you, your son, your daughter, your manservant, your maidservant, your beast, and your stranger who is in your cities. For [in] six days the Lord made the heavens and the earth, the sea, and all that is in them, and He rested on the seventh day. Therefore, the Lord blessed the Sabbath day and sanctified it.”
          </p>
  
          <p>
            <strong>Exodus 31:12-17</strong><br />
            “And the Lord spoke to Moses, saying: ‘And you, speak to the children of Israel, saying: “You shall observe My Sabbaths, for it is a sign between Me and you throughout your generations, to know that I am the Lord, Who makes you holy. You shall observe the Sabbath, for it is holy to you; its desecrators shall be put to death, for whoever performs work on it, that soul shall be cut off from among its people. Six days work may be done, but on the seventh day is a complete Sabbath of rest, holy to the Lord; whoever performs work on the Sabbath day shall be put to death. The children of Israel shall observe the Sabbath, to make the Sabbath throughout their generations as an everlasting covenant. Between Me and the children of Israel, it is a sign forever, that in six days the Lord created the heaven and the earth, and on the seventh day He ceased and rested.’”
          </p>
  
          <p>
            <strong>Exodus 35:1-3</strong><br />
            “And Moses assembled the entire congregation of the children of Israel and said to them: ‘These are the words that the Lord has commanded to perform them: Six days work may be done, but on the seventh day, it shall be holy for you, a Sabbath of Sabbaths to the Lord; whoever performs work on it shall be put to death. You shall not kindle fire in any of your dwellings on the Sabbath day.’”
          </p>
  
          <p>
            <strong>Deuteronomy 5:12-15 (Repetition of the Commandment)</strong><br />
            “Keep the Sabbath day to sanctify it, as the Lord your God has commanded you. Six days you may work, and perform all your labor, but the seventh day is a Sabbath to the Lord your God; you shall not perform any labor—you, your son, your daughter, your manservant, your maidservant, your ox, your donkey, and all your livestock, and the stranger in your cities, in order that your manservant and your maidservant may rest like you. And you shall remember that you were a slave in the land of Egypt, and that the Lord your God took you out from there with a strong hand and an outstretched arm; therefore, the Lord your God commanded you to keep the Sabbath day.”
          </p>
        </div>
        <p>
          If you’d like additional commentary or context on these verses, let me know!
        </p>
      </div>
  
    );
}

export default DocumentPage;

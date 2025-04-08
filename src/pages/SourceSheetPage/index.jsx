import React from 'react';

function SourceSheetPage() {

    const sourceSheetContainerStyle = {
        border: '1px solid #e0e0e0',
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'Georgia, serif',
        lineHeight: '1.7',
        fontSize: '16px',
        color: '#333',
      };
      
      const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#222',
      };
      
      const sectionHeadingStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '10px',
        color: '#444',
      };
      
      const subsectionHeadingStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '15px',
        marginBottom: '5px',
        color: '#555',
        fontStyle: 'italic',
      };
      
      const verseStyle = {
        marginLeft: '20px',
        marginBottom: '10px',
        fontStyle: 'italic',
        color: '#666',
      };
      
      const keyConceptStyle = {
        marginLeft: '20px',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#777',
      };
      
      const mishnahStyle = {
        marginLeft: '20px',
        marginBottom: '10px',
        fontFamily: 'monospace',
        color: '#555',
      };
      
      const bulletPointStyle = {
        marginLeft: '30px',
        marginBottom: '5px',
      };
      
      const reflectionHeadingStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '30px',
        marginBottom: '10px',
        color: '#444',
      };
      

    return (
    <div style={sourceSheetContainerStyle}>
      <p style={headingStyle}>
        Source Sheet: The Foundations of Shabbat Laws
      </p>
      <p>
        Below is a structured source sheet exploring the foundations of Shabbat laws in Jewish tradition. It includes key Torah verses, Talmudic passages, and insights from classic commentators.
      </p>

      <p style={sectionHeadingStyle}>1. Biblical Foundations</p>
      <p>
        The laws of Shabbat derive primarily from the Torah. The concept is rooted in the creation of the world and the Exodus from Egypt.
      </p>

      <p style={subsectionHeadingStyle}>A. Creation Narrative</p>
      <p style={verseStyle}>
        <strong>Genesis 2:1-3</strong><br />
        “And the heavens and the earth were completed, and all their hosts. And on the seventh day, God completed His work that He had done, and He rested on the seventh day from all His work that He had done. And God blessed the seventh day and sanctified it, for on it He rested from all His work that God created to do.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Shabbat is a commemoration of God’s rest after creation.
      </p>

      <p style={subsectionHeadingStyle}>B. The Fourth Commandment</p>
      <p style={verseStyle}>
        <strong>Exodus 20:8-11</strong><br />
        “Remember the Sabbath day to sanctify it. Six days you may work and perform all your labor, but the seventh day is a Sabbath to the Lord your God; you shall not perform any labor—you, your son, your daughter, your manservant, your maidservant, your beast, and your stranger who is in your cities. For [in] six days the Lord made the heavens and the earth, the sea, and all that is in them, and He rested on the seventh day. Therefore, the Lord blessed the Sabbath day and sanctified it.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Shabbat is a holy day of rest mandated by God, connected to both creation and the covenant between God and Israel.
      </p>

      <p style={sectionHeadingStyle}>2. Categories of Work (Melachot)</p>
      <p>
        The Talmud identifies 39 prohibited categories of work (melachot) on Shabbat, derived from the construction of the Mishkan (Tabernacle).
      </p>

      <p style={subsectionHeadingStyle}>A. Source of the 39 Melachot</p>
      <p style={verseStyle}>
        <strong>Exodus 35:1-3</strong><br />
        “And Moses assembled the entire congregation of the children of Israel and said to them: These are the words that the Lord has commanded to perform them. Six days work may be done, but on the seventh day, it shall be holy for you, a Sabbath of Sabbaths to the Lord; whoever performs work on it shall be put to death. You shall not kindle fire in any of your dwellings on the Sabbath day.”
      </p>

      <p style={subsectionHeadingStyle}>B. Mishkan Connection</p>
      <p style={mishnahStyle}>
        <strong>Mishnah, Shabbat 7:2</strong><br />
        “The primary categories of work are forty-less-one: sowing, plowing, reaping, binding sheaves, threshing, winnowing, selecting, grinding, sifting, kneading, baking, shearing wool, washing it, beating it, dyeing it, spinning, weaving, making two loops, weaving two threads, separating two threads, tying, untying, sewing two stitches, tearing in order to sew two stitches, trapping a deer, slaughtering it, skinning it, salting it, curing its hide, scraping it, cutting it, writing two letters, erasing in order to write two letters, building, demolishing, extinguishing a fire, kindling a fire, striking with a hammer, and carrying from one domain to another.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: The melachot reflect creative activities used in constructing the Tabernacle, emphasizing that Shabbat is a cessation from acts of human mastery over nature.
      </p>

      <p style={sectionHeadingStyle}>3. Purpose of Shabbat</p>
      <p>
        Shabbat serves multiple purposes, both spiritual and communal.
      </p>

      <p style={subsectionHeadingStyle}>A. Covenant with God</p>
      <p style={verseStyle}>
        <strong>Exodus 31:16-17</strong><br />
        “The children of Israel shall observe the Sabbath, to make the Sabbath throughout their generations as an everlasting covenant. Between Me and the children of Israel, it is a sign forever, that in six days the Lord created the heaven and the earth, and on the seventh day He ceased and rested.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Shabbat is a perpetual covenant and sign of the relationship between God and Israel.
      </p>

      <p style={subsectionHeadingStyle}>B. Commemoration of Exodus</p>
      <p style={verseStyle}>
        <strong>Deuteronomy 5:12-15</strong><br />
        “Keep the Sabbath day to sanctify it, as the Lord your God has commanded you. Six days may you work, and perform all your labor, but the seventh day is a Sabbath to the Lord your God; you shall not perform any labor—you, your son, your daughter, your manservant, your maidservant, your ox, your donkey, and all your livestock, and the stranger in your cities, in order that your manservant and your maidservant may rest like you. And you shall remember that you were a slave in the land of Egypt, and that the Lord your God took you out from there with a strong hand and an outstretched arm; therefore, the Lord your God commanded you to keep the Sabbath day.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Shabbat is a reminder of liberation and equality, offering rest to all.
      </p>

      <p style={sectionHeadingStyle}>4. Rabbinic Framework</p>
      <p>
        In addition to the biblical prohibitions, rabbinic law elaborates on Shabbat observance.
      </p>

      <p style={subsectionHeadingStyle}>A. Protective Fences</p>
      <p style={verseStyle}>
        <strong>Talmud, Shabbat 23b</strong><br />
        “One who recites Havdalah over a cup of wine adds to the sanctity of Shabbat by extending its boundaries.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Rabbinic laws, such as prohibitions on muktzeh (items set aside) or the requirement of an eruv, ensure proper observance of Shabbat.
      </p>

      <p style={subsectionHeadingStyle}>B. The Delight of Shabbat</p>
      <p style={verseStyle}>
        <strong>Isaiah 58:13-14</strong><br />
        “If you restrain your foot because of the Sabbath, from performing your affairs on My holy day, and you call the Sabbath a delight, the holy of the Lord honored, and you honor it by not engaging in your own affairs, from seeking your own needs or discussing the forbidden—then you shall delight with the Lord, and I will cause you to ride on the high places of the earth, and I will nourish you with the heritage of Jacob your father, for the mouth of the Lord has spoken.”
      </p>
      <p style={keyConceptStyle}>
        Key Concept: Shabbat is not only a cessation of labor but also a time of spiritual delight, study, and connection with God.
      </p>

      <p style={sectionHeadingStyle}>5. Practical Applications</p>
      <p style={subsectionHeadingStyle}>A. Preparation for Shabbat</p>
      <p style={bulletPointStyle}>
        • <strong>Shulchan Aruch, Orach Chayim 250:1:</strong> “It is a mitzvah to prepare for Shabbat, even for a person of great stature. One should personally be involved in Shabbat preparations.”
      </p>
      <p style={subsectionHeadingStyle}>B. Lighting Shabbat Candles</p>
      <p style={bulletPointStyle}>
        • <strong>Talmud, Shabbat 25b:</strong> “The mitzvah of lighting candles is for peace in the home.”
      </p>
      <p style={subsectionHeadingStyle}>C. Kiddush and Meals</p>
      <p style={bulletPointStyle}>
        • <strong>Talmud, Pesachim 106a:</strong> “Sanctify the day with words of praise over a cup of wine.”
      </p>

      <p style={reflectionHeadingStyle}>Reflection and Discussion</p>
      <ol>
        <li>How do the prohibitions of melachot shape our understanding of rest?</li>
        <li>In what ways does Shabbat connect the individual to the broader Jewish community and history?</li>
        <li>How can modern observance balance the laws of Shabbat with contemporary challenges?</li>
      </ol>

      <p>
        This source sheet offers a foundation for exploring Shabbat’s laws and deeper meanings. Further study can expand on specific topics like individual melachot, rabbinic decrees, or spiritual practices.
      </p>
    </div>
    );
}

export default SourceSheetPage;

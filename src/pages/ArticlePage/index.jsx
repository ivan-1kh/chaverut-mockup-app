import React from 'react';

function ArticlePage() {

    const relevanceContainerStyle = {
        border: '1px solid #f0f0f0',
        padding: '25px',
        borderRadius: '10px',
        fontFamily: 'Merriweather, serif',
        lineHeight: '1.8',
        fontSize: '17px',
        color: '#4a4a4a',
        backgroundColor: '#f9f9f9',
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
    };

    const sectionHeadingStyle = {
        fontSize: '22px',
        fontWeight: 'bold',
        marginTop: '30px',
        marginBottom: '15px',
        color: '#383838',
    };

    const bulletPointStyle = {
        marginLeft: '25px',
        marginBottom: '10px',
        listStyleType: 'disc',
    };

    const conclusionStyle = {
        marginTop: '35px',
        fontStyle: 'italic',
        color: '#5e5e5e',
    };


    return (
        <div style={relevanceContainerStyle}>
            <p style={titleStyle}>
                The Relevance of Shabbat Laws in Modern Life
            </p>
            <p>
                In the fast-paced, technology-driven world of the 21st century, the ancient laws of Shabbat offer a timeless oasis of rest, reflection, and renewal. While Shabbat originates in biblical tradition and is steeped in millennia of Jewish practice, its relevance extends beyond religious observance. Shabbat laws can serve as a counterbalance to modern life’s relentless demands, fostering mental health, family connection, and spiritual depth.
            </p>

            <p style={sectionHeadingStyle}>A Pause for Rest in a World That Never Stops</p>
            <p>
                Modern life operates at breakneck speed, with constant notifications, deadlines, and the pressure to always be productive. Shabbat laws, which mandate ceasing creative work (melachot), offer a profound invitation to stop and rest.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Disconnecting from Technology:</strong> By refraining from activities like writing, carrying, or using electronics, Shabbat provides an opportunity to unplug from screens and reconnect with the present moment. Studies have shown that regular digital detoxes improve mental health, reduce anxiety, and enhance focus.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Reclaiming Rest as Sacred:</strong> In a culture that often equates rest with laziness, Shabbat reframes rest as a sacred act. The concept of stopping work to honor something greater than oneself is a radical assertion of human dignity in a world that commodifies time.
                </li>
            </ul>

            <p style={sectionHeadingStyle}>Fostering Deep Relationships</p>
            <p>
                Shabbat laws encourage a communal and family-oriented atmosphere, emphasizing the value of human connection over transactional interactions.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Family Time:</strong> The prohibition on work, technology, and other distractions creates a space for uninterrupted family meals, meaningful conversations, and shared rituals. Families often describe Shabbat as a cornerstone of their week, providing a consistent time to bond.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Community Building:</strong> Shabbat observance fosters community connections through synagogue attendance, shared meals, and collective rituals. In an era where loneliness and social isolation are on the rise, Shabbat helps build and maintain supportive social networks.
                </li>
            </ul>

            <p style={sectionHeadingStyle}>A Weekly Dose of Mindfulness</p>
            <p>
                Shabbat laws align closely with contemporary mindfulness practices, which emphasize intentionality, presence, and gratitude.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Intentional Living:</strong> From the lighting of candles to the recitation of Kiddush, Shabbat rituals encourage participants to pause and focus on the moment. These acts of mindfulness help counteract the modern tendency to rush through life without reflection.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Gratitude for Creation:</strong> Shabbat laws connect observers to the rhythm of nature, reminding them of their place in the world. Blessings over food, wine, and the natural order instill a sense of appreciation for life’s simple joys.
                </li>
            </ul>

            <p style={sectionHeadingStyle}>Resisting Consumerism</p>
            <p>
                In a society driven by consumerism, Shabbat offers a powerful alternative by emphasizing being over buying.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Prohibition on Commerce:</strong> By refraining from buying and selling, Shabbat pushes back against the relentless consumer culture. It reminds individuals that happiness and fulfillment are not tied to material possessions.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Celebrating Simplicity:</strong> Shabbat meals, prepared in advance, celebrate the idea that joy comes from preparation, mindfulness, and shared experience rather than excess or indulgence.
                </li>
            </ul>

            <p style={sectionHeadingStyle}>The Ethical Dimension</p>
            <p>
                Shabbat laws also reflect ethical values that are deeply relevant to modern challenges.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Equality and Justice:</strong> Shabbat mandates rest for all, including servants, animals, and even the land during the Sabbatical year (shemita). This egalitarian principle speaks to contemporary concerns about worker rights, sustainability, and animal welfare.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Environmentally Conscious Living:</strong> Shabbat’s cessation from creative work aligns with the modern emphasis on reducing one’s carbon footprint. By consuming less and pausing routine activity, Shabbat observers contribute to a more sustainable world.
                </li>
            </ul>

            <p style={sectionHeadingStyle}>A Spiritual Recharge</p>
            <p>
                Beyond the practical benefits, Shabbat laws provide a framework for spiritual nourishment in an often-secularized world.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={bulletPointStyle}>
                    <strong>Connecting to the Divine:</strong> Shabbat emphasizes a relationship with God through prayer, study, and reflection. For those seeking spirituality, this connection offers a sense of purpose and grounding.
                </li>
                <li style={bulletPointStyle}>
                    <strong>Rediscovering the Sacred:</strong> In a time when the sacred is often eclipsed by the mundane, Shabbat creates a weekly space to rediscover awe, wonder, and the sanctity of life.
                </li>
            </ul>

            <p style={conclusionStyle}>
                The laws of Shabbat, far from being relics of an ancient past, are profoundly relevant to modern life. They offer a structured way to disengage from the constant hustle, nurture meaningful relationships, and focus on what truly matters. In a world that often prioritizes productivity over well-being, Shabbat laws remind us that rest, reflection, and connection are not just luxuries—they are necessities for a balanced and fulfilling life.
            </p>
            <p style={conclusionStyle}>
                By embracing the wisdom of Shabbat, both Jews and non-Jews alike can find a blueprint for living more intentionally, joyfully, and sustainably in the modern age.
            </p>
        </div>

    );
}

export default ArticlePage;

import {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };

    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
    this.loadIcon = this.loadIcon.bind(this);
  }

  showLikes(likes){
    let feed = this.state.feed;

    if(feed.likes <= 0){
        return;
    }

    return (
        <Text style={styles.likes}>
            {feed.likes} {feed.likes > 1 ? 'Likes' : 'Like'}
        </Text>
    )
  }

  like(){
    let feed = this.state.feed;

    if(feed.liked){
        this.setState({feed: {
            ...feed,
            liked:false,
            likes: feed.likes - 1,
        }})
        return;
    }
    this.setState({feed: {
        ...feed,
        liked:true,
        likes: feed.likes + 1,
    }})
    return;
  }

  loadIcon(liked){
    return liked ? require('../img/liked.png') : require('../img/like.png');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileView}>
          <Image
            source={{uri: this.state.feed.profileImg}}
            style={styles.profileImg}
          />
          <Text style={styles.userName}>{this.state.feed.name}</Text>
        </View>

        <Image
          resizeMode="cover"
          source={{uri: this.state.feed.postImg}}
          style={styles.postImg}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.loadIcon(this.state.feed.liked)}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../img/send.png')}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes(this.state.feed.likes)}

        <View style={styles.footerView}>
            <Text style={styles.postUserName}>{this.state.feed.name}</Text>

            <Text style={styles.postDescription}>{this.state.feed.description}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 8,
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 60,
  },
  postImg: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 5
  },
  likeIcon: {
    width: 33,
    height: 33,
  },
  userName:{
    fontSize: 23,
    color: 'black',
    
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    gap: 5
  },
  postDescription: {
    fontSize: 15,
    color: 'black',
  },
  postUserName:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  }
});

export default List;

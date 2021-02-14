using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entitties;
using DatingApp.API.DTOs;
using DatingApp.API.Entitties;
using DatingApp.API.Helpers;

namespace DatingApp.API.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int SourceUserId, int LikedUserId);

        Task<AppUser> GetUserWithLikes(int userId);

        Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);
    }
}
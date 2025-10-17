FROM mcr.microsoft.com/dotnet/sdk:6.0 AS dotnet
WORKDIR /src
COPY "./IdentityServer.Bff/IdentityServer.Bff.csproj" "./IdentityServer.Bff/IdentityServer.Bff.csproj"
RUN dotnet restore "./IdentityServer.Bff/IdentityServer.Bff.csproj"
COPY "./IdentityServer.Bff" "./IdentityServer.Bff"
RUN dotnet publish "./IdentityServer.Bff/IdentityServer.Bff.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=dotnet "/app/publish" "."
ENTRYPOINT ["dotnet", "IdentityServer.Bff.dll"]
